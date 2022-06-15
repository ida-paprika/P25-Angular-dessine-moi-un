import { Component, Input, OnInit } from '@angular/core';
import { ProjectView } from 'src/app/models/project-view';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.css']
})
export class ProjectsTableComponent implements OnInit {

  role!: string | null;
  projectList!: ProjectView[];
  noProject = false;
  filter!: string;

  constructor(private projects: ProjectService) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') != null) {
      this.role = localStorage.getItem('role');

      if (this.role == 'ROLE_ORDERER') {
        this.getOrdererProjects();
      } else if (this.role == 'ROLE_ARTIST') {
        this.getArtistProjects();
      }
    }
  }

  getOrdererProjects() {
    this.projects.getOrdererProjects().subscribe({
      next: (resp) => {
        this.isResponseEmpty(resp);
      },
      error: (err) => {
        alert("Oups ! Quelque chose s'est mal passé :(");
      }
    });
  }

  getArtistProjects() {
    this.projects.getArtistProjects().subscribe({
      next: (resp) => {
        this.isResponseEmpty(resp);
      },
      error: (err) => {
        alert("Oups ! Quelque chose s'est mal passé :(");
      }
    });
  }

  isResponseEmpty(resp: any) {
    if (resp.length == 0) {
      this.noProject = true;
    } else {
      this.projectList = resp;
      this.filterData(this.projectList);
    }
  }

  onClickDeleteProject(projectId: number) {
    this.projects.deleteProject(projectId).subscribe({
      next: (resp) => {
        this.projectList = this.projectList.filter(project => project.id !== projectId);
      },
      error: (err) => {
        alert("Oups ! Quelque chose s'est mal passé :(");
      }
    });
  }

  onClickAcceptProject(projectId: number) {
    this.projects.acceptProject(projectId).subscribe({
      next: (resp) => {
        this.projectList = this.projectList.filter(project => project.id == projectId ? project.progressStatus == 'IN_PROGRESS' : project.progressStatus);
      },
      error: (err) => {
        alert("Oups ! Quelque chose s'est mal passé :(");
      }
    });
  }

  filterData(array: ProjectView[]) {
    switch (this.filter) {
      case 'waiting':
        this.projectList = array.filter(item => item.progressStatus == 'WAITING');
        break;
      case 'progress':
        this.projectList = array.filter(item => item.progressStatus == 'IN_PROGRESS');
        break;
      case 'done':
        this.projectList = array.filter(item => item.progressStatus == 'DONE');
        break;
      case 'all':
        this.projectList = array;
        break;
      default:
        this.projectList = array;
        break;
    }

  }
}

