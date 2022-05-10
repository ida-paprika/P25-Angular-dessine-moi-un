import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicProfileArtistComponent } from './public-profile-artist.component';

describe('PublicProfileArtistComponent', () => {
  let component: PublicProfileArtistComponent;
  let fixture: ComponentFixture<PublicProfileArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicProfileArtistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicProfileArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
