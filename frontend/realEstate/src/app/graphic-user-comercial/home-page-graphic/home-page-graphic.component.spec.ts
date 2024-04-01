import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageGraphicComponent } from './home-page-graphic.component';

describe('HomePageGraphicComponent', () => {
  let component: HomePageGraphicComponent;
  let fixture: ComponentFixture<HomePageGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageGraphicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePageGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
