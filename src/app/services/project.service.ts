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

  createProject(project: ProjectCreate) {
    return this.http.post(`${this.urlApi}/projects`, project);
  }

  deleteProject(projectId: number) {
    return this.http.delete(
      `${this.urlApi}/projects/${projectId}`);
  }

  acceptProject(projectId: number) {
    return this.http.patch(`${this.urlApi}/projects/accept`, projectId);
  }

  getOrdererProjects() {
    return this.http.get(`${this.urlApi}/projects/orderer`);
  }

  getArtistProjects() {
    return this.http.get(`${this.urlApi}/projects/artist`);
  }

}
