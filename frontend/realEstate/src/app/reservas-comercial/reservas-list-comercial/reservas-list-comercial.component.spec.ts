import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasListComercialComponent } from './reservas-list-comercial.component';

describe('ReservasListComercialComponent', () => {
  let component: ReservasListComercialComponent;
  let fixture: ComponentFixture<ReservasListComercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservasListComercialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservasListComercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
