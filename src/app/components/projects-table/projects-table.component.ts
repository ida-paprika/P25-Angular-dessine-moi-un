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
    if (this.filter != null) {
      console.log(this.filter);
    }

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
        console.log(err);
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
        console.log(err);
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
        console.log(err);
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
        console.log(err);
        alert("Oups ! Quelque chose s'est mal passé :(");
      }
    });
  }

  filterData(array: ProjectView[]) {
    switch (this.filter) {
      case 'waiting':
        this.projectList = array.filter(item => item.progressStatus == 'WAINTING');
        break;
      case 'progress':
        this.projectList = array.filter(item => item.progressStatus == 'IN_PROGRESS');
        break;
      case 'done':
        this.projectList = array.filter(item => item.progressStatus == 'DONE');
        break;
      default:
        this.projectList = array;
        break;
    }

  }
}

/* SERVICE
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private urlApi: string;

  constructor(private http: HttpClient) { 
    this.urlApi = 'https://test-node-jb.herokuapp.com';
  }

  getAllCountries(): Observable<Country[]> {
    const token = localStorage.getItem("token");
    
    return this.http.get<Country[]>(`${this.urlApi}/api/country/personnal`, 
      {headers : { Authorization : `Bearer ${token}`}}
    )
  }

  getCountryById(countryId: string): Observable<Country> {
    const token = localStorage.getItem("token");
    
    return this.http.get<Country>(`${this.urlApi}/api/country/${countryId}`, 
      {headers : { Authorization : `Bearer ${token}`}}
    )
  }

  updateCountry(country: Country): Observable<any> {
    const token = localStorage.getItem("token");
    
    const body = {
      name: country.name,
      capital: country.capital,
      population: country.population,
      area: country.area
    }

    return this.http.put<any>(`${this.urlApi}/api/country/${country._id}`,
      body, 
      {headers : { Authorization : `Bearer ${token}`}}
    )
  }

  createNewCountry(newCountry: Country) {
    const token = localStorage.getItem("token");

    return this.http.post(
      `${this.urlApi}/api/country`, 
      newCountry,
      {headers : { Authorization : `Bearer ${token}`}}
    )
  }
}
*/

/* CLASSE
updateCountryForm!: FormGroup;

constructor(
  private activatedRoute: ActivatedRoute,
  private countryService: CountryService,
  private fb: FormBuilder) { }

ngOnInit(): void {
  this.activatedRoute.params.subscribe((param) => {
    console.log(param);
    this.countryService.getCountryById(param['id-country']).subscribe((country: Country) => {
      console.log(country);
      this.updateCountryForm = this.fb.group({
        name: [country.name, Validators.required],
        capital: [country.capital, Validators.required],
        population: [country.population, Validators.required],
        area: [country.area, Validators.required],
        _id: [country._id]
      })
    })
  })
}

onSubmitForm() {
  const countryToUpdate = this.updateCountryForm.value;

  this.countryService.updateCountry(countryToUpdate).subscribe((resp) => {
    alert(resp.message);
  })
}
*/
