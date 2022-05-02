import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindAnArtistViewComponent } from './views/find-an-artist-view/find-an-artist-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { PageNotFoundViewComponent } from './views/page-not-found-view/page-not-found-view.component';
import { SignInViewComponent } from './views/sign-in-view/sign-in-view.component';
import { SignUpViewComponent } from './views/sign-up-view/sign-up-view.component';

const routes: Routes = [
  { path: 'accueil', component: HomeViewComponent },
  { path: 'trouver-un-artiste', component: FindAnArtistViewComponent },
  { path: 'inscription', component: SignUpViewComponent },
  { path: 'connexion', component: SignInViewComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  {
    path: '**', pathMatch: 'full',
    component: PageNotFoundViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
