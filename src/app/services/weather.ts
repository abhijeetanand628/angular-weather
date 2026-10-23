import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class Weather {
  private apiKey = environment.weatherApiKey;
  private apiUrl = environment.weatherApiUrl;

  constructor(private http: HttpClient) {}

  getWeather(city: string) {
    const url = `${this.apiUrl}/forecast.json`

    return this.http.get(url, {
      params: {
        key: this.apiKey,
        q: city,
        days: 3,
        aqi: 'yes'
      }
    })
  }
}
