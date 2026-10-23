import { Component, inject, signal } from '@angular/core';
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

  weatherData = signal<any>(null)

  ngOnInit(){
    this.loadWeather('Patna')
  }

  loadWeather(city: string) {
    this.weatherService.getWeather(city).subscribe({
      next: (data) => {
        this.weatherData.set(data)
        console.log('Weather data:', data);
      },
      error: (err) => {
        console.error('Weather request failed:', err);
      }
    });
  }
}
