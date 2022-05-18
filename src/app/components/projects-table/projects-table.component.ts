import { Component, OnInit } from '@angular/core';
import { ProjectView } from 'src/app/models/project-view';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.css']
})
export class ProjectsTableComponent implements OnInit {

  projectList!: ProjectView[];
  noProject = false;

  constructor(private projects: ProjectService) { }

  ngOnInit(): void {
    this.getOrdererProjects();
  }

  getOrdererProjects() {
    this.projects.getOrdererProjects(912).subscribe({
      next: (resp) => {
        console.log(resp);
        this.isResponseEmpty(resp);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  isResponseEmpty(resp: any) {
    if (resp.length == 0) {
      this.noProject = true;
    } else {
      this.projectList = resp;
    }
  }

  onClickDeleteProject(projectId: number) {


    this.projects.deleteProject(projectId).subscribe({
      next: (resp) => {
        console.log(resp);
        this.projectList = this.projectList.filter(project => project.id !== projectId);
      },
      error: (err) => {
        console.log(err);
      }
    });
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
