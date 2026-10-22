import { Component } from '@angular/core';
import { LucideWind } from '@lucide/angular';

@Component({
  selector: 'app-air-quality-card',
  imports: [LucideWind],
  templateUrl: './air-quality-card.html',
  styleUrl: './air-quality-card.css',
})
export class AirQualityCard {
  airQuality = {
    aqi: 2,
    status: 'Moderate',
    description:
      'Air quality is acceptable; some pollutants may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.'
  };
}
