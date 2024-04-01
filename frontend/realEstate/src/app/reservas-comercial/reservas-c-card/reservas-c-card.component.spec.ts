import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasCCardComponent } from './reservas-c-card.component';

describe('ReservasCCardComponent', () => {
  let component: ReservasCCardComponent;
  let fixture: ComponentFixture<ReservasCCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservasCCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservasCCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
