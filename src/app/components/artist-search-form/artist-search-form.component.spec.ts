import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistSearchFormComponent } from './artist-search-form.component';

describe('ArtistSearchFormComponent', () => {
  let component: ArtistSearchFormComponent;
  let fixture: ComponentFixture<ArtistSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistSearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
