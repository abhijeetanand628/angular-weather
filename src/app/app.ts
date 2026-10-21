import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBar } from './components/search-bar/search-bar';
import { WeatherCard } from './components/weather-card/weather-card';
import { WeatherForecast } from './components/weather-forecast/weather-forecast';
import { AirQualityCard } from './components/air-quality-card/air-quality-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchBar, WeatherCard, WeatherForecast, AirQualityCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
