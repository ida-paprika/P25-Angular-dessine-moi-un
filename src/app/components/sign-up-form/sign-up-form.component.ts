import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAccountService } from 'src/app/services/user-account.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  @Input() isArtist!: boolean;
  public signUpForm!: FormGroup;
  public fieldTextType: boolean = false;
  private passwordPattern = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,20}$";

  constructor(private fb: FormBuilder, private accountService: UserAccountService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.signUpForm = this.fb.group({
      artistName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]],
      userName: ['', [
        Validators.required,
        Validators.email
      ]],
      userPassword: ['', [
        Validators.required,
        Validators.pattern(this.passwordPattern)
      ]]
    });
  }

  onSubmitForm() {
    console.log(this.signUpForm.value);

    const username = this.signUpForm.value.userName;
    const password = this.signUpForm.value.userPassword;

    if (this.isArtist) {
      const artistName = this.signUpForm.value.artistName;
      this.accountService.registerArtist(artistName, username, password).subscribe((response) => {
        console.log(response);
      });
    } else {
      this.accountService.registerClient(username, password).subscribe((response) => {
        console.log(response);
      });
    }
  }

  toggleFieldTextType(): void {
    this.fieldTextType = !this.fieldTextType;
  }

}
