import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageVendedorComponent } from './home-page-vendedor.component';

describe('HomePageVendedorComponent', () => {
  let component: HomePageVendedorComponent;
  let fixture: ComponentFixture<HomePageVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageVendedorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePageVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
