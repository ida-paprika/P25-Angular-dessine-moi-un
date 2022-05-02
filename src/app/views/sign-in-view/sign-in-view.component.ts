import { Component, OnInit } from '@angular/core';
import { UserAccountService } from 'src/app/services/user-account.service';

@Component({
  selector: 'app-sign-in-view',
  templateUrl: './sign-in-view.component.html',
  styleUrls: ['./sign-in-view.component.css']
})
export class SignInViewComponent implements OnInit {

  public fieldTextType: boolean = false;

  constructor(private accountService: UserAccountService) { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    const username = form.value.userName;
    const password = form.value.userPassword;

    this.accountService.loginUser(username, password).subscribe((responseApi: { accessToken: string }) => {
      console.log(responseApi);
      this.storeToken('access_token', responseApi.accessToken);
    });
  }

  storeToken(key: string, token: string) {
    localStorage.setItem(key, JSON.stringify(token));
  }

  toggleFieldTextType(): void {
    this.fieldTextType = !this.fieldTextType;
  }

}
