import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectCreate } from 'src/app/models/project-create';
import { ArtistService } from 'src/app/services/artist.service';
import { ProfileService } from 'src/app/services/profile.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent implements OnInit, OnChanges {
  @Input() projectForm!: ProjectCreate;
  artistCards?: any[];
  noArtist = false;
  artistId!: number;
  isLogged!: boolean;
  signIn!: boolean;
  names = { firstName: '', lastName: '' };
  userName!: string;
  modal!: any; modalBg!: any; body!: any;

  constructor(
    private artists: ArtistService,
    private projects: ProjectService,
    private profiles: ProfileService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('access_token')) {
      this.isLogged = true;
      this.checkUserName();
    } else {
      this.isLogged = false;
    }
  }

  ngOnChanges() {
    this.getArtistCards();
  }

  setUserName(event: string) {
    this.userName = event;
    this.onClick(this.artistId);
    this.removeBSModal();
  }

  setArtistId(event: number) {
    this.artistId = event;
  }

  onClick(artistId: number) {
    this.projectForm.setArtistId(artistId);

    this.projects.createProject(this.projectForm).subscribe({
      next: (resp) => {
        this.router.navigateByUrl('/mon-profil');
      },
      error: (err) => {
        this.isLogged = false;
        alert("Oups ! Quelque chose s'est mal passé :(");
      }
    });
  }

  getArtistCards() {
    this.artists.getArtistCards(this.projectForm.artMediumId,
      this.projectForm.artFormatId).subscribe({
        next: (resp) => {
          console.log(resp);
          this.isResponseEmpty(resp);
        },
        error: (err) => {
          alert("Oups ! Quelque chose s'est mal passé :(");
        }
      });
  }

  isResponseEmpty(resp: any) {
    if (resp.length == 0) {
      this.noArtist = true;
    } else {
      this.artistCards = resp;
      this.noArtist = false;
    }
  }

  checkUserName() {
    this.profiles.getProfileNames()?.subscribe({
      next: (resp: any) => {
        this.names = resp;
      },
      error: (err: any) => {
        alert("Oups ! Quelque chose s'est mal passé :(");
      }
    });
  }

  removeBSModal() {
    this.modal = document.querySelector(".modal");
    this.modal.parentNode.removeChild(this.modal);
    this.modalBg = document.querySelector(".modal-backdrop");
    this.modalBg.parentNode.removeChild(this.modalBg);
    this.body = document.querySelector("body");
    this.body.classList.remove("modal-open");
    this.body.removeAttribute('style');
  }

}
