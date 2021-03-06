import { Component, Input, OnInit } from '@angular/core';
import { ProjectCreate } from 'src/app/models/project-create';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-find-an-artist-view',
  templateUrl: './find-an-artist-view.component.html',
  styleUrls: ['./find-an-artist-view.component.css']
})
export class FindAnArtistViewComponent implements OnInit {

  estimatedPrice?: number;
  projectForm!: ProjectCreate;

  constructor(private projects: ProjectService) { }

  ngOnInit(): void { }

  getEstimatedPrice(medium: number, format: number) {
    this.projects.getEstimatedPrice(medium, format).subscribe({
      next: (resp: any) => {
        this.estimatedPrice = resp;
        this.projectForm.setPrice(resp);
      },
      error: (err: any) => {
        alert("Oups ! Quelque chose s'est mal passé :(");
      }
    });
  }

  getProjectForm(event: ProjectCreate) {
    this.projectForm = event;
    this.getEstimatedPrice(this.projectForm.artMediumId, this.projectForm.artFormatId);
  }
}
