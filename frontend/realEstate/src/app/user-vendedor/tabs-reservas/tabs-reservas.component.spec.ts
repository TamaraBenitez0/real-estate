import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsReservasComponent } from './tabs-reservas.component';

describe('TabsReservasComponent', () => {
  let component: TabsReservasComponent;
  let fixture: ComponentFixture<TabsReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabsReservasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabsReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
