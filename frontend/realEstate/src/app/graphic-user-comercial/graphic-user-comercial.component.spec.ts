import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicUserComercialComponent } from './graphic-user-comercial.component';

describe('GraphicUserComercialComponent', () => {
  let component: GraphicUserComercialComponent;
  let fixture: ComponentFixture<GraphicUserComercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraphicUserComercialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphicUserComercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
