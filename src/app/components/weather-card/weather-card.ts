import { Component, Input } from '@angular/core';
import { LucideDroplet, LucideWind, LucideThermometer, LucideSunrise, LucideSunset, LucideSun } from '@lucide/angular';

@Component({
  selector: 'app-weather-card',
  imports: [LucideDroplet, LucideWind, LucideThermometer, LucideSunrise, LucideSunset, LucideSun],
  templateUrl: './weather-card.html',
  styleUrl: './weather-card.css',
})
export class WeatherCard {
  @Input({ required: true}) data!: any;

  get weather() {
    const current = this.data.current
    const location = this.data.location;
    const astro = this.data.forecast.forecastday[0].astro;

    return {
      city: location.name,
      region: location.region,
      country: location.country,
      date: location.localtime,
      temperature: current.temp_c,
      condition: current.condition.text,
      humidity: current.humidity,
      windSpeed: current.wind_kph,
      feelsLike: current.feelslike_c,
      sunrise: astro.sunrise,
      sunset: astro.sunset,
    };
  }
}
