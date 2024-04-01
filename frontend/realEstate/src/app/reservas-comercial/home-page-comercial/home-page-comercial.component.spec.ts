import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComercialComponent } from './home-page-comercial.component';

describe('HomePageComercialComponent', () => {
  let component: HomePageComercialComponent;
  let fixture: ComponentFixture<HomePageComercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageComercialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePageComercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
