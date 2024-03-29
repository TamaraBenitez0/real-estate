import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';

import { RouterModule } from '@angular/router';
import { routes } from './productos-routing-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductoIdComponent } from './producto-id/producto-id.component';
import { MaterialModule } from '../shared/material/material.module';
import { ProductoCardComponent } from './producto-card/producto-card.component';



@NgModule({
  declarations: [
    ProductosComponent,
    HomePageComponent,
    ProductoIdComponent,
    ProductoCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
    
  ],
  exports:[ProductosComponent,ProductoCardComponent]
})
export class ProductosModule { }
