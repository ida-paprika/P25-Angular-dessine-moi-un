import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAccountService } from 'src/app/services/user-account.service';

@Component({
  selector: 'app-sign-in-view',
  templateUrl: './sign-in-view.component.html',
  styleUrls: ['./sign-in-view.component.css']
})
export class SignInViewComponent implements OnInit {

  public signInError = false;

  public fieldTextType: boolean = false;

  constructor(
    private accountService: UserAccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.deleteToken('access_token');
  }

  onSubmit(form: any) {
    const username = form.value.userName;
    const password = form.value.userPassword;
    const REQUEST = this.accountService.loginUser(username, password);

    REQUEST.subscribe({
      next: (resp: any) => {
        console.log(resp.token);
        this.router.navigateByUrl('/mon-profil');
        this.storeToken('access_token', resp.token);
      },
      error: (err: any) => {
        this.signInError = true;
        console.log(err);
      }
    });

    // redirection vers la page d'accueil (+ modif account options du header)
  }

  storeToken(key: string, token: string) {
    localStorage.setItem(key, JSON.stringify(token));
  }

  deleteToken(key: string) {
    localStorage.removeItem(key);
  }

  toggleFieldTextType(): void {
    this.fieldTextType = !this.fieldTextType;
  }

}
