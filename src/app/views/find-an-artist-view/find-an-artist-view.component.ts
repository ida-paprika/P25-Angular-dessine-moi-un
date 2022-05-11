import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-find-an-artist-view',
  templateUrl: './find-an-artist-view.component.html',
  styleUrls: ['./find-an-artist-view.component.css']
})
export class FindAnArtistViewComponent implements OnInit {

  public estimatedPrice?: number;

  constructor(private projects: ProjectService) { }

  ngOnInit(): void {

  }

  addItem(newItem: any) {
    console.log(newItem.medium);
  }

  getEstimatedPrice(event: any) {
    this.projects.getEstimatedPrice(event.medium, event.format).subscribe({
      next: (resp: any) => {
        this.estimatedPrice = resp;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

}
