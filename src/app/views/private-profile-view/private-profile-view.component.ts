import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-private-profile-view',
  templateUrl: './private-profile-view.component.html',
  styleUrls: ['./private-profile-view.component.css']
})
export class PrivateProfileViewComponent implements OnInit {

  role!: string | null;
  userNames = { firstName: '', lastName: '' };
  artist!: { artistName: string, instagramUrl: string };
  tab!: string;

  constructor(private profiles: ProfileService, private artists: ArtistService) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') != null) {
      this.role = localStorage.getItem('role');

      if (this.role == 'ROLE_ORDERER') {
        this.getUserNames();
      } else if (this.role == 'ROLE_ARTIST') {
        this.getArtistProfile();
      }
    }
  }


  getUserNames(): any {
    this.profiles.getProfileNames()?.subscribe({
      next: (resp: any) => {
        this.userNames = resp;
      },
      error: (err) => {
        console.log(err);
        alert("Oups ! Quelque chose s'est mal passé :(");
      }
    });
  }

  getArtistProfile(): any {
    this.artists.getArtistProfile().subscribe({
      next: (resp: any) => {
        this.artist = resp;
        console.log(this.artist);
      },
      error: (err) => {
        console.log(err);
        alert("Oups ! Quelque chose s'est mal passé :(");
      }
    });
  }

  passFilterValue(component: any) {
    component.filter = this.tab;
  }

}
