import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  isAuthenticated = false;

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('access_token');

    if (token !== null && token !== '') {
      this.isAuthenticated = true;
    }

    this.auth.messenger.subscribe((message: boolean) => {
      this.isAuthenticated = message;
    })
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('role');
    this.isAuthenticated = false;
    this.router.navigateByUrl('/accueil');
  }


}
