import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-private-profile-view',
  templateUrl: './private-profile-view.component.html',
  styleUrls: ['./private-profile-view.component.css']
})
export class PrivateProfileViewComponent implements OnInit {
  userNames = { firstName: '', lastName: '' };

  constructor(private profiles: ProfileService) { }

  ngOnInit(): void {
    this.getUserNames();

  }

  getUserNames(): any {
    this.profiles.getProfileNames()?.subscribe(
      {
        next: (resp: any) => {
          console.log(resp);
          this.userNames = resp;
        },
        error: (err) => {
          console.log(err);
          alert("Oups ! Quelque chose s'est mal passé :(");
        }
      }
    );
  }

}
