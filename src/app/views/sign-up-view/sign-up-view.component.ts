import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-view',
  templateUrl: './sign-up-view.component.html',
  styleUrls: ['./sign-up-view.component.css']
})
export class SignUpViewComponent implements OnInit {

  public isArtist: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  displayForm(e: boolean) {
    this.isArtist = e;
  }

}
