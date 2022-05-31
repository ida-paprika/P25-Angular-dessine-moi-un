import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileNamesFormComponent } from './profile-names-form.component';

describe('ProfileNamesFormComponent', () => {
  let component: ProfileNamesFormComponent;
  let fixture: ComponentFixture<ProfileNamesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileNamesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileNamesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
