import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

  private urlApi: string

  constructor(private http: HttpClient) {
    this.urlApi = environment.urlApi;
  }

  public registerClient(email: string, password: string) {
    const body = {
      "email": email,
      "password": password
    };
    return this.http.post(`${this.urlApi}/profiles/create-orderer`, body);
  }

  public registerArtist(artistName: string, email: string, password: string) {
    const body = {
      "artistName": artistName,
      "email": email,
      "password": password
    };
    return this.http.post(`${this.urlApi}/profiles/create-artist`, body);
  }

  public loginUser(email: string, password: string): Observable<{ accessToken: string }> {
    const body = {
      "email": email,
      "password": password
    };
    return this.http.post<any>(`${this.urlApi}/profiles/login`, body);
  }


}
