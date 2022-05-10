import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-artist-search-form',
  templateUrl: './artist-search-form.component.html',
  styleUrls: ['./artist-search-form.component.css']
})
export class ArtistSearchFormComponent implements OnInit {

  public searchForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      projectMedium: [''],
      projectFormat: [''],
      projectDescription: [''],
      projectDeadline: ['']
    });
  }

  onSubmit() {

  }

}
