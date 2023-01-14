import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../country/interfaces/country.interface';
import { enviroment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
 private readonly http = inject(HttpClient);

 getWeatherByName(city = 'barcelona'): Observable<Weather>
 {
    console.log('buscando..', city);
    return this.http.get<Weather>(`${enviroment.api}?q=${city}&appid=${enviroment.key}`)  
 }
}
