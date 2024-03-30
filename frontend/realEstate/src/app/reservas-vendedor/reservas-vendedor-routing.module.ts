import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageVendedorComponent } from './home-page-vendedor/home-page-vendedor.component';
import { ReservasListComponent } from './reservas-list/reservas-list.component';
import { ReservaVDetalleComponent } from './reserva-v-detalle/reserva-v-detalle.component';
import { ReservaVAddComponent } from './reserva-v-add/reserva-v-add.component';

export const routesReservasVendedor: Routes = [{

  path:'',
  component:HomePageVendedorComponent,
  children:[
    {
      path:'',
      component:ReservasListComponent
    },
     {
        path:'detalle/:id',
        component:ReservaVDetalleComponent
    },
    {
      path:'addReserva',
      component:ReservaVAddComponent
    }
  ]

}];

