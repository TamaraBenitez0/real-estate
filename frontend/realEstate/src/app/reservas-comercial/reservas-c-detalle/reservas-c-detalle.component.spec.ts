import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasCDetalleComponent } from './reservas-c-detalle.component';

describe('ReservasCDetalleComponent', () => {
  let component: ReservasCDetalleComponent;
  let fixture: ComponentFixture<ReservasCDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservasCDetalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservasCDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
