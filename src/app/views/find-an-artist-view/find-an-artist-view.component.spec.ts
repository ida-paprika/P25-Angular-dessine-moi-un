import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAnArtistViewComponent } from './find-an-artist-view.component';

describe('FindAnArtistViewComponent', () => {
  let component: FindAnArtistViewComponent;
  let fixture: ComponentFixture<FindAnArtistViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAnArtistViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAnArtistViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
