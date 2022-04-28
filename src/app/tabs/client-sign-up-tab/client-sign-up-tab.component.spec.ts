import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSignUpTabComponent } from './client-sign-up-tab.component';

describe('ClientSignUpTabComponent', () => {
  let component: ClientSignUpTabComponent;
  let fixture: ComponentFixture<ClientSignUpTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSignUpTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSignUpTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
