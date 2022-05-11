import { DatePipe, formatDate } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Format } from 'src/app/interfaces/format';
import { Medium } from 'src/app/interfaces/medium';
import { FormatService } from 'src/app/services/format.service';
import { MediumService } from 'src/app/services/medium.service';

@Component({
  selector: 'app-artist-search-form',
  templateUrl: './artist-search-form.component.html',
  styleUrls: ['./artist-search-form.component.css'],
  providers: [DatePipe]
})
export class ArtistSearchFormComponent implements OnInit {

  public searchForm!: FormGroup;
  public submitted = false;
  public mediumList!: Medium[];
  public formatList!: Format[];
  public projectPrice!: number;
  @Output() mediumFormatEvent = new EventEmitter<{}>();


  constructor(
    private fb: FormBuilder,
    private mediums: MediumService,
    private formats: FormatService
  ) { }

  ngOnInit(): void {
    this.getAllMediums();
    this.getAllFormats();

    this.searchForm = this.fb.group({
      projectMedium: ['', [Validators.required]],
      projectFormat: ['', [Validators.required]],
      projectDescription: ['', [Validators.required, Validators.minLength(50), Validators.maxLength(250)]],
      projectDeadline: ['', [Validators.required]]
    },
      {
        validator: this.futureDateValidator
      }
    );
    this.searchForm.controls['projectFormat'].setValue('1', { onlySelf: true });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.searchForm.value);
    let mediumFormatId = {
      medium: this.searchForm.controls['projectMedium'].value,
      format: this.searchForm.controls['projectFormat'].value
    }

    this.mediumFormatEvent.emit(mediumFormatId);
    // calculate price
    // get artistCards
  }

  futureDateValidator(form: FormGroup) {
    const today = new Date();
    const deadline = new Date(form.get('projectDeadline')?.value);
    if (deadline.getTime() <= today.getTime()) {
      return { mismatch: true };
    } else {
      return null;
    }
  }

  getAllMediums() {
    this.mediums.getAllMediums().subscribe({
      next: (resp: any) => {
        this.mediumList = resp;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  getAllFormats() {
    this.formats.getAllFormats().subscribe({
      next: (resp: any) => {
        this.formatList = resp;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

}
