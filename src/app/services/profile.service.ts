import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private urlApi: string

  constructor(private http: HttpClient) {
    this.urlApi = environment.urlApi;
  }

  getProfileInfos(userId: number) {
    return this.http.get(`${this.urlApi}/profiles/${userId}`);
  }

  getProfileNames(): Observable<{}> | undefined {
    if (localStorage.getItem("access_token") !== null) {
      return this.http.get<any>(`${this.urlApi}/profiles/names`);
    } else {
      return undefined;
    }
  }

  updateProfileNames(firstName: string, lastName: string): Observable<{}> {
    const body = {
      "firstName": firstName,
      "lastName": lastName
    };

    return this.http.patch<any>(`${this.urlApi}/profiles/update-names`, body);
  }
}
