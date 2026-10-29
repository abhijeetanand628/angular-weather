import { Component, inject, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBar } from './components/search-bar/search-bar';
import { WeatherCard } from './components/weather-card/weather-card';
import { WeatherForecast } from './components/weather-forecast/weather-forecast';
import { AirQualityCard } from './components/air-quality-card/air-quality-card';
import { Weather } from './services/weather';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchBar, WeatherCard, WeatherForecast, AirQualityCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private weatherService = inject(Weather)

  @ViewChild(SearchBar) searchBar!: SearchBar;

  weatherData = signal<any>(null)
  isLoading = signal(false);
  weatherError = signal('');

  ngOnInit(){
    this.loadWeather('Patna')
  }

  loadWeather(city: string) {
    this.isLoading.set(true);
    this.weatherError.set('');

    this.weatherService.getWeather(city).subscribe({
      next: (data) => {
        this.weatherData.set(data)
        this.isLoading.set(false);

        // Clear the input only after a successful response.
        this.searchBar.clearInput();
      },
      error: (err) => {
        this.isLoading.set(false);

        const status = err.status;
        const apiMessage = err.error?.error?.message;

        if (status === 0) {
          this.weatherError.set(
            'Unable to connect to the server. Check your internet connection and try again.'
          );
        } else if (status === 400) {
          this.weatherError.set(
            'City not found or invalid request. Check the city name and try again.'
          );
        } else if (status === 401) {
          this.weatherError.set(
            'Weather API authentication failed. Check your API key.'
          );
        } else if (status === 403) {
          this.weatherError.set(
            'Weather API access denied. Check your API plan, key permissions or quota.'
          );
        } else if (status === 429) {
          this.weatherError.set(
            'Too many requests. Please wait a moment and try again.'
          );
        } else {
          this.weatherError.set(
            apiMessage
              ? `Weather request failed: ${apiMessage}`
              : 'Something went wrong while fetching weather. Please try again.'
          );
        }
        console.error('Weather request failed:', err);
      }
    });
  }
}
