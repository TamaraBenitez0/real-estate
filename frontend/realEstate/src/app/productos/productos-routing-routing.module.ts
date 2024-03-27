import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductosDetallesComponent } from './productos-detalles/productos-detalles.component';
import { ProductoIdComponent } from './producto-id/producto-id.component';

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
        path: '**',
        redirectTo: 'inicio'
      }
    ]
  }
];


