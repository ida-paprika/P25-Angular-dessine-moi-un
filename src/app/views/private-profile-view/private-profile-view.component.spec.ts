import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateProfileViewComponent } from './private-profile-view.component';

describe('PrivateProfileViewComponent', () => {
  let component: PrivateProfileViewComponent;
  let fixture: ComponentFixture<PrivateProfileViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateProfileViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
