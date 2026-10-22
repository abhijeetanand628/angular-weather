import { Component } from '@angular/core';
import { LucideMapPin, LucideDroplet, LucideWind, LucideThermometer, LucideSunrise, LucideSunset, LucideSun } from '@lucide/angular';

@Component({
  selector: 'app-weather-card',
  imports: [LucideMapPin, LucideDroplet, LucideWind, LucideThermometer, LucideSunrise, LucideSunset, LucideSun],
  templateUrl: './weather-card.html',
  styleUrl: './weather-card.css',
})
export class WeatherCard {
  weather = {
    city: 'Patna',
    region: 'Bihar',
    country: 'India',
    date: 'Thursday, October 22',
    temperature: 30,
    condition: 'Sunny',
    humidity: 42,
    windSpeed: 7.2,
    feelsLike: 29,
    sunrise: '05:51 AM',
    sunset: '05:16 PM',
  };
}
