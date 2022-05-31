import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('access_token');

    if (token !== '' && token !== null) {
      const authReq = request.clone({
        // headers: request.headers.set('Authorization', `Bearer ${token}`)
        setHeaders: { 'Authorization': `Bearer ${token}` }
      });
      return next.handle(authReq);
    } else {
      return next.handle(request);
    }
  }
}
