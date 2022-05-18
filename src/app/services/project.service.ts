import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProjectCreate } from '../models/project-create';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private urlApi: string;

  constructor(private http: HttpClient) {
    this.urlApi = environment.urlApi;
  }

  getEstimatedPrice(mediumId: number, formatId: number) {
    const params = new HttpParams().set("mediumId", mediumId).set("formatId", formatId);
    return this.http.get(`${this.urlApi}/projects/price`, { params: params });
  }

  getOrdererProjects(userId: number) {
    const param = new HttpParams().set("profileId", userId);
    return this.http.get(`${this.urlApi}/projects/orderer`, { params: param });
  }

  getArtistProjects(userId: number) {
    const param = new HttpParams().set("profileId", userId);
    return this.http.get(`${this.urlApi}/projects/artist`, { params: param });
  }

  createProject(project: ProjectCreate) {

    return this.http.post(`${this.urlApi}/projects`, project);

    // const token = localStorage.getItem("access_token");
    // return this.http.post(`${this.urlApi}/projects`,
    //   project,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${token}`
    //     }
    //   }
    // );
  }

  deleteProject(projectId: number) {
    return this.http.delete(`${this.urlApi}/projects/${projectId}`);

    // const token = localStorage.getItem("access_token");

    // return this.http.delete(
    //   `${this.urlApi}/projects/${projectId}`,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${token}`
    //     }
    //   }
    // );
  }

}
