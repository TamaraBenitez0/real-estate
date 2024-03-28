import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVendedorComponent } from './user-vendedor.component';

describe('UserVendedorComponent', () => {
  let component: UserVendedorComponent;
  let fixture: ComponentFixture<UserVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserVendedorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
