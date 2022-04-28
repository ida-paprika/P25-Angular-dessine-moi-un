import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-sign-up-tab',
  templateUrl: './client-sign-up-tab.component.html',
  styleUrls: ['./client-sign-up-tab.component.css']
})
export class ClientSignUpTabComponent implements OnInit {

  public clientSignUpForm!: FormGroup;
  public fieldTextType: boolean = false;
  private passwordPattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.clientSignUpForm = this.fb.group({
      userName: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
      confirmPassword: ['', [Validators.required, Validators.pattern(this.passwordPattern)]]
    });
  }

  onSubmitForm() {
    console.log(this.clientSignUpForm.value);
    if (this.clientSignUpForm.invalid) {
      return;
    }
  }

  toggleFieldTextType(): void {
    this.fieldTextType = !this.fieldTextType;
  }

}
