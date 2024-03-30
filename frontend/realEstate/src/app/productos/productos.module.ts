import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';

import { RouterModule } from '@angular/router';
import { routes } from './productos-routing-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductoIdComponent } from './producto-id/producto-id.component';
import { MaterialModule } from '../shared/material/material.module';
import { ProductoCardComponent } from './producto-card/producto-card.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductosComponent,
    HomePageComponent,
    ProductoIdComponent,
    ProductoCardComponent,
    AgregarProductoComponent,
    ActualizarProductoComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
    
  ],
  exports:[ProductosComponent,ProductoCardComponent]
})
export class ProductosModule { }
