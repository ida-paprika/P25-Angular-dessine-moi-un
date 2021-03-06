import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

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
import { PrivateProfileViewComponent } from './views/private-profile-view/private-profile-view.component';
import { ProjectsTableComponent } from './components/projects-table/projects-table.component';
import { ProfileNamesFormComponent } from './components/profile-names-form/profile-names-form.component';
import { FirstLetterPipe } from './pipes/first-letter.pipe';
import { AuthInterceptor } from './auth.interceptor';
import { UpdatePasswordFormComponent } from './components/update-password-form/update-password-form.component';

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
    ArtistSearchFormComponent,
    PrivateProfileViewComponent,
    ProjectsTableComponent,
    ProfileNamesFormComponent,
    FirstLetterPipe,
    UpdatePasswordFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
