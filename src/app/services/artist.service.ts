import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private urlApi: string;

  constructor(private http: HttpClient) {
    this.urlApi = environment.urlApi;
  }

  getArtistCards(mediumId: number, formatId: number) {
    let params = new HttpParams().set("mediumId", mediumId).set("formatId", formatId);
    return this.http.get(`${this.urlApi}/artists/cards`, { params: params });
  }

  public getArtistInfos(userId: number) {
    let param = new HttpParams().set("profile-id", userId);
    return this.http.get(`${this.urlApi}/artists`, { params: param });
  }

}
