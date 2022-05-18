import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAccountService } from 'src/app/services/user-account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  isAuthenticated = false;

  userId = 812;

  constructor(private accounts: UserAccountService, private router: Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('access_token');

    if (token !== null && token !== '') {
      this.isAuthenticated = true;
    }

    this.accounts.messenger.subscribe((message: boolean) => {
      console.log('Logged user !');
      console.log(message);
      this.isAuthenticated = message;
    })
  }

  logout() {
    localStorage.removeItem('access_token');
    this.isAuthenticated = false;
    this.router.navigateByUrl('/accueil');
  }


}
