import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistSignUpTabComponent } from './artist-sign-up-tab.component';

describe('ArtistSignUpTabComponent', () => {
  let component: ArtistSignUpTabComponent;
  let fixture: ComponentFixture<ArtistSignUpTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistSignUpTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistSignUpTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
