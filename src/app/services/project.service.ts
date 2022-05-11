import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private urlApi: string;

  constructor(private http: HttpClient) {
    this.urlApi = environment.urlApi;
  }

  getEstimatedPrice(mediumId: number, formatId: number) {
    let params = new HttpParams().set("mediumId", mediumId).set("formatId", formatId);
    return this.http.get(`${this.urlApi}/projects/price`, { params: params });
  }
}
