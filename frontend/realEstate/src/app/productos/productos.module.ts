import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';
import { ProductosDetallesComponent } from './productos-detalles/productos-detalles.component';
import { RouterModule } from '@angular/router';
import { routes } from './productos-routing-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductoIdComponent } from './producto-id/producto-id.component';
import { MaterialModule } from '../shared/material/material.module';



@NgModule({
  declarations: [
    ProductosComponent,
    ProductosDetallesComponent,
    HomePageComponent,
    ProductoIdComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
    
  ],
  exports:[ProductosComponent,ProductosDetallesComponent]
})
export class ProductosModule { }
