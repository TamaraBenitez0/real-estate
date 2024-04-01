import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasVCardComponent } from './reservas-v-card.component';

describe('ReservasVCardComponent', () => {
  let component: ReservasVCardComponent;
  let fixture: ComponentFixture<ReservasVCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservasVCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservasVCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
