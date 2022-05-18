import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectCreate } from 'src/app/models/project-create';
import { ArtistService } from 'src/app/services/artist.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent implements OnInit {

  @Input() projectForm!: ProjectCreate;
  artistCards?: any[];
  noArtist = false;
  isLogged!: boolean;
  signIn!: boolean;

  constructor(
    private artists: ArtistService,
    private projects: ProjectService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getArtistCards();
    if (localStorage.getItem('access_token')) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
      localStorage.setItem('project', JSON.stringify(this.projectForm));
    }
  }

  getArtistCards() {
    this.artists.getArtistCards(this.projectForm.artMediumId, this.projectForm.artFormatId).subscribe({
      next: (resp: any) => {
        console.log(resp);
        this.isResponseEmpty(resp);
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  isResponseEmpty(resp: any) {
    if (resp.length == 0) {
      this.noArtist = true;
    } else {
      this.artistCards = resp;
    }
  }

  onClick(artistId: number) {
    this.projectForm.setArtistId(artistId);
    this.projects.createProject(this.projectForm).subscribe();
    this.router.navigateByUrl('/mon-profil/812');
  }

}
