import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaVAddComponent } from './reserva-v-add.component';

describe('ReservaVAddComponent', () => {
  let component: ReservaVAddComponent;
  let fixture: ComponentFixture<ReservaVAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservaVAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservaVAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
