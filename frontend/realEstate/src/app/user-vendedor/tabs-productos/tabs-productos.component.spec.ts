import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsProductosComponent } from './tabs-productos.component';

describe('TabsProductosComponent', () => {
  let component: TabsProductosComponent;
  let fixture: ComponentFixture<TabsProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabsProductosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabsProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
