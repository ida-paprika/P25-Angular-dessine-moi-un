import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  @Input() isArtist!: boolean;
  submitted = false;
  signUpError = false;
  signUpForm!: FormGroup;
  fieldTextType: boolean = false;
  private passwordPattern = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,20}$";
  // modal window disabling
  modal!: any;
  modalBg!: any;
  body!: any;

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService,
    private router: Router
  ) { }

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
    this.submitted = true;
    if (this.signUpForm.controls['userName'].valid && this.signUpForm.controls['userPassword'].valid) {
      const username = this.signUpForm.value.userName;
      const password = this.signUpForm.value.userPassword;
      let request;

      if (this.isArtist) {
        const artistName = this.signUpForm.value.artistName;
        request = this.auth.registerArtist(artistName, username, password);
      } else {
        request = this.auth.registerClient(username, password);

      }
      this.signUpUser(request);
    }
  }

  toggleFieldTextType(): void {
    this.fieldTextType = !this.fieldTextType;
  }

  private signUpUser(request: Observable<any>) {
    request.subscribe({
      next: (resp) => {
        this.removeBSModal();
        this.router.navigateByUrl('/connexion');
      },
      error: (err) => {
        this.signUpError = true;
        console.log(err);
        alert(err.error.errors);
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
