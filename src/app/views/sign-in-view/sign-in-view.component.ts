import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-sign-in-view',
  templateUrl: './sign-in-view.component.html',
  styleUrls: ['./sign-in-view.component.css']
})
export class SignInViewComponent implements OnInit {

  signInError = false;
  showMsg = false;
  fieldTextType: boolean = false;

  constructor(
    private authent: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.deleteToken('access_token');
  }

  onSubmit(form: any) {
    const username = form.value.userName;
    const password = form.value.userPassword;
    const REQUEST = this.authent.loginUser(username, password);

    REQUEST.subscribe({
      next: (resp: any) => {
        this.storeToken('access_token', resp.token);
        this.authent.messenger.next(true);
        this.router.navigateByUrl('/mon-profil');

      },
      error: (err: any) => {
        this.signInError = true;
        console.log(err);
        alert("Oups ! Quelque chose s'est mal passé :(");
      }
    });

  }

  storeToken(key: string, token: string) {
    localStorage.setItem(key, token);
  }

  deleteToken(key: string) {
    localStorage.removeItem(key);
  }

  toggleFieldTextType(): void {
    this.fieldTextType = !this.fieldTextType;
  }

  lostPassword(lostPwdForm: any) {
    console.log(lostPwdForm.value.userMail);
    this.showMsg = true;
    this.authent.lostPassword(lostPwdForm.value.userMail).subscribe({
      next: (resp: any) => {
        this.showMsg = true;
      },
      error: (err: any) => {
        console.log(err);
        alert("Oups ! Quelque chose s'est mal passé :(");
      }
    });

  }

}
