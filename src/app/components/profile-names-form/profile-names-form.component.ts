import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-names-form',
  templateUrl: './profile-names-form.component.html',
  styleUrls: ['./profile-names-form.component.css']
})
export class ProfileNamesFormComponent implements OnInit {

  userNamesForm!: FormGroup;
  @Input() userNames!: any;
  submitted = false;
  @Output() isNamesEvent = new EventEmitter<string>();

  constructor(private fb: FormBuilder, private profiles: ProfileService) { }

  ngOnInit(): void {

    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.userNames);
    this.initForm();
  }


  initForm(): void {
    this.userNamesForm = this.fb.group({
      firstName: [(this.userNames.firstName !== null ? this.userNames.firstName : ''), [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.pattern('^[A-Za-z0-9çéè-]+$')
      ]],
      lastName: [(this.userNames.lastName !== null ? this.userNames.lastName : ''), [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern('^[A-Za-z0-9çéè-]+$')
      ]]
    });
  }

  onSubmitForm() {
    this.submitted = true;
    const firstName = this.userNamesForm.value.firstName;
    const lastName = this.userNamesForm.value.lastName;

    this.profiles.updateProfileNames(firstName, lastName).subscribe(
      {
        next: (resp: any) => {
          this.isNamesEvent.emit(resp.name);
        },
        error: (err: any) => {
          console.log(err);
          alert("Oups ! Quelque chose s'est mal passé :(");
        }
      }
    );
  }


}
