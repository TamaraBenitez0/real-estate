import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComercialComponent } from './user-comercial.component';

describe('UserComercialComponent', () => {
  let component: UserComercialComponent;
  let fixture: ComponentFixture<UserComercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComercialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserComercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
