import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sign-up-view',
  templateUrl: './sign-up-view.component.html',
  styleUrls: ['./sign-up-view.component.css']
})
export class SignUpViewComponent implements OnInit {

  isArtist: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  displayForm(e: boolean) {
    this.isArtist = e;
  }


}
