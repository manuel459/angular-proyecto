import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from '../environment/environment';



@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve<unknown> {
private readonly http = inject(HttpClient);
private readonly API = 'https://restcountries.com/v2/regionalbloc/usan';
  constructor() { }

  resolve(): Observable<unknown> {

    const lat = '40.730610';
    const lon = '-73.935242';

      return this.http.get(
      `${enviroment.api}?lat=${lat}&lon=${lon}`
      );
  }
}
