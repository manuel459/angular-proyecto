
import { Subject } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherData } from '../Interfaces/weather.interface';
import { enviroment } from 'src/app/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly http = inject(HttpClient);
  weatherData$ = new Subject<WeatherData>();

  constructor() {
    this.getWeatherByName();
  }

  setData(data: WeatherData): void {
    this.weatherData$.next(data);
  }

  getWeatherByName(city = 'barcelona'): void {
    this.http
      .get<WeatherData>(`${enviroment.api}?q=${city}`)
      .subscribe((value: WeatherData) => {
        this.setData(value);
      });
  }
}