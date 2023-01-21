import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from './Interfaces/weather.interface';

import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  public weather$!: Observable<WeatherData>;
  constructor(private readonly weatherSvc: WeatherService) {}
  ngOnInit() {
    this.weather$ = this.weatherSvc.weatherData$;
    console.log(this.weather$)
  }
}
