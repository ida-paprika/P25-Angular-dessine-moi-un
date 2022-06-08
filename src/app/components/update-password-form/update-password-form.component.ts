import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-update-password-form',
  templateUrl: './update-password-form.component.html',
  styleUrls: ['./update-password-form.component.css']
})
export class UpdatePasswordFormComponent implements OnInit {

  updatePwdForm!: FormGroup;
  fieldTextType: boolean = false;
  submitted = false;
  success = false;
  private passwordPattern = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,20}$";

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.updatePwdForm = this.fb.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [
        Validators.required,
        Validators.pattern(this.passwordPattern)
      ]]
    });
  }

  onSubmitForm() {
    this.submitted = true;
    console.log(this.updatePwdForm.value);
    if (this.updatePwdForm.valid) {
      const oldPwd = this.updatePwdForm.value.oldPassword;
      const newPwd = this.updatePwdForm.value.newPassword;

      this.auth.updatePassword(oldPwd, newPwd).subscribe({
        next: (resp) => {
          this.success = true;
        },
        error: (err) => {
          console.log(err);
          alert(err.error.errors);
        }
      });
    }
  }

  toggleFieldTextType(): void {
    this.fieldTextType = !this.fieldTextType;
  }

}
