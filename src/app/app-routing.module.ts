import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsTableComponent } from './components/projects-table/projects-table.component';
import { AuthGuard } from './guards/auth.guard';
import { FindAnArtistViewComponent } from './views/find-an-artist-view/find-an-artist-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { PageNotFoundViewComponent } from './views/page-not-found-view/page-not-found-view.component';
import { PrivateProfileViewComponent } from './views/private-profile-view/private-profile-view.component';
import { SignInViewComponent } from './views/sign-in-view/sign-in-view.component';
import { SignUpViewComponent } from './views/sign-up-view/sign-up-view.component';

const routes: Routes = [
  { path: 'accueil', component: HomeViewComponent },
  { path: 'trouver-un-artiste', component: FindAnArtistViewComponent },
  { path: 'inscription', component: SignUpViewComponent },
  { path: 'connexion', component: SignInViewComponent },
  {
    path: 'mon-profil', canActivate: [AuthGuard],
    component: PrivateProfileViewComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'en-attente' },
      { path: 'en-attente', canActivate: [AuthGuard], component: ProjectsTableComponent },
      { path: 'en-cours', canActivate: [AuthGuard], component: ProjectsTableComponent },
      { path: 'termines', canActivate: [AuthGuard], component: ProjectsTableComponent }
    ]
  },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  {
    path: '**', pathMatch: 'full',
    component: PageNotFoundViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
