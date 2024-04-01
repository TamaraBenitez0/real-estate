import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductoIdComponent } from './producto-id/producto-id.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: '',
        component: ProductosComponent
      },
       
      {

        path: 'detalle/:id',
        component: ProductoIdComponent
      
      },
      {
        path:'addProducto',
        component: AgregarProductoComponent
      },
      {
        path:'editProducto/:id',
        component: ActualizarProductoComponent
      },
      {
        path: '**',
        redirectTo: 'inicio'
      }
    ]
  }
];


