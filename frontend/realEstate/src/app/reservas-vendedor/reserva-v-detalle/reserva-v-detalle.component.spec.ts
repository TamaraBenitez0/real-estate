import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaVDetalleComponent } from './reserva-v-detalle.component';

describe('ReservaVDetalleComponent', () => {
  let component: ReservaVDetalleComponent;
  let fixture: ComponentFixture<ReservaVDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservaVDetalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservaVDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
