import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistSignUpTabComponent } from './tabs/artist-sign-up-tab/artist-sign-up-tab.component';
import { ClientSignUpTabComponent } from './tabs/client-sign-up-tab/client-sign-up-tab.component';
import { FindAnArtistViewComponent } from './views/find-an-artist-view/find-an-artist-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { PageNotFoundViewComponent } from './views/page-not-found-view/page-not-found-view.component';
import { SignUpViewComponent } from './views/sign-up-view/sign-up-view.component';

const routes: Routes = [
  { path: 'accueil', component: HomeViewComponent },
  { path: 'trouver-un-artiste', component: FindAnArtistViewComponent },
  {
    path: 'inscription', component: SignUpViewComponent, children: [
      { path: 'client-sign-up', component: ClientSignUpTabComponent },
      { path: 'artist-sign-up', component: ArtistSignUpTabComponent }
    ]
  },
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
