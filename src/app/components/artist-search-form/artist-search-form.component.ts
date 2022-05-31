import { DatePipe, formatDate } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Format } from 'src/app/interfaces/format';
import { Medium } from 'src/app/interfaces/medium';
import { ProjectCreate } from 'src/app/models/project-create';
import { FormatService } from 'src/app/services/format.service';
import { MediumService } from 'src/app/services/medium.service';

@Component({
  selector: 'app-artist-search-form',
  templateUrl: './artist-search-form.component.html',
  styleUrls: ['./artist-search-form.component.css'],
  providers: [DatePipe]
})
export class ArtistSearchFormComponent implements OnInit {
  searchForm!: FormGroup; submitted = false;
  mediumList!: Medium[]; formatList!: Format[];
  projectPrice!: number;
  @Output() projectFormEvent = new EventEmitter<ProjectCreate>();

  constructor(private fb: FormBuilder, private mediums: MediumService,
    private formats: FormatService) { }
  ngOnInit(): void {
    this.getAllMediums();
    this.getAllFormats();
    this.initForm();
  }
  initForm() {
    this.searchForm = this.fb.group({
      artMediumId: ['', [Validators.required]],
      artFormatId: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(255)]],
      deadline: ['', [Validators.required]]
    },
      {
        validator: this.futureDateValidator
      }
    ); this.searchForm.controls['artFormatId'].setValue('1', { onlySelf: true });
  }
  onSubmit() {
    this.submitted = true;
    if (this.searchForm.valid) {
      const project = new ProjectCreate(this.searchForm.controls['description'].value, this.searchForm.controls['deadline'].value, this.searchForm.controls['artMediumId'].value, this.searchForm.controls['artFormatId'].value);
      this.projectFormEvent.emit(project);
    }
  }

  futureDateValidator(form: FormGroup) {
    const today = new Date();
    const deadline = new Date(form.get('deadline')?.value);
    if (deadline.getTime() <= today.getTime() || !deadline) {
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
        alert("Oups ! Quelque chose s'est mal passé :(");
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
        alert("Oups ! Quelque chose s'est mal passé :(");
      }
    });
  }

}
