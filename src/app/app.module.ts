import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundViewComponent } from './views/page-not-found-view/page-not-found-view.component';
import { FindAnArtistViewComponent } from './views/find-an-artist-view/find-an-artist-view.component';
import { SignUpViewComponent } from './views/sign-up-view/sign-up-view.component';
import { ClientSignUpTabComponent } from './tabs/client-sign-up-tab/client-sign-up-tab.component';
import { ArtistSignUpTabComponent } from './tabs/artist-sign-up-tab/artist-sign-up-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeViewComponent,
    FooterComponent,
    PageNotFoundViewComponent,
    FindAnArtistViewComponent,
    SignUpViewComponent,
    ClientSignUpTabComponent,
    ArtistSignUpTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
