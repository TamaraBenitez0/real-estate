import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComercialComponent } from './home-page-comercial/home-page-comercial.component';
import { ReservasListComercialComponent } from './reservas-list-comercial/reservas-list-comercial.component';
import { ReservasCDetalleComponent } from './reservas-c-detalle/reservas-c-detalle.component';

export const routesComercial: Routes = [
  {
    path:'',
    component:HomePageComercialComponent,
    children: [
      {
        path:'',
        component:ReservasListComercialComponent
    },
    {
      path:'detalle/:id',
      component:ReservasCDetalleComponent
    }
  
  
  ]
  }


];

