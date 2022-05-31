import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token = localStorage.getItem('access_token');

    if (token !== null) {
      const decodedToken: {
        exp: number,
        iat: number,
        iss: string,
        roles: [],
        sub: string
      } = jwtDecode(token);
      const expirationDate = new Date(decodedToken.exp * 1000);
      const currentDate = new Date();

      if (expirationDate < currentDate) {
        localStorage.removeItem('access_token');
        this.router.navigateByUrl('/connexion');
        return false;
      } else {
        return true;
      }

    } else {
      this.router.navigateByUrl('/connexion');
      return false;
    }
  }

}
