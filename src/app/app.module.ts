import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundViewComponent } from './views/page-not-found-view/page-not-found-view.component';
import { FindAnArtistViewComponent } from './views/find-an-artist-view/find-an-artist-view.component';
import { SignUpViewComponent } from './views/sign-up-view/sign-up-view.component';
import { SignInViewComponent } from './views/sign-in-view/sign-in-view.component';
import { ArtistCardComponent } from './components/artist-card/artist-card.component';
import { PublicProfileArtistComponent } from './components/public-profile-artist/public-profile-artist.component';
import { ArtistSearchFormComponent } from './components/artist-search-form/artist-search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeViewComponent,
    FooterComponent,
    PageNotFoundViewComponent,
    FindAnArtistViewComponent,
    SignUpViewComponent,
    SignUpFormComponent,
    SignInViewComponent,
    ArtistCardComponent,
    PublicProfileArtistComponent,
    ArtistSearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
