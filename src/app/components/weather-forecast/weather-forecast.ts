import { Component } from '@angular/core';
import { LucideCloud,  } from '@lucide/angular';

@Component({
  selector: 'app-weather-forecast',
  imports: [LucideCloud],
  templateUrl: './weather-forecast.html',
  styleUrl: './weather-forecast.css',
})
export class WeatherForecast {}
