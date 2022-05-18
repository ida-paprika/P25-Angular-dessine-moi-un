import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectView } from 'src/app/models/project-view';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-private-profile-view',
  templateUrl: './private-profile-view.component.html',
  styleUrls: ['./private-profile-view.component.css']
})
export class PrivateProfileViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
