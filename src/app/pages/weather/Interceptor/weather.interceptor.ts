
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from 'rxjs';
import { enviroment } from "src/app/environment/environment";

export class WeatherInterceptor implements HttpInterceptor {

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>>{

    const cloneReq = req.clone({
      params: req.params.appendAll({
        'units': 'metric',
        'appid': enviroment.key
      })
    })
    return next.handle(cloneReq);
  }

}