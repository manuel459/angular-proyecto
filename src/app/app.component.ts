import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from './country/interfaces/country.interface';
import { WeatherServiceService } from './services/weather-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'materia';
  data$!: Observable<Weather>;

  constructor(private readonly weatherSvc: WeatherServiceService){}

  onSearch(city: string): void
  {
    this.data$ = this.weatherSvc.getWeatherByName(city);
  }

}
