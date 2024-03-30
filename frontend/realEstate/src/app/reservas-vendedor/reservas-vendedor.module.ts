import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReservasListComponent } from './reservas-list/reservas-list.component';
import { HomePageVendedorComponent } from './home-page-vendedor/home-page-vendedor.component';
import { MaterialModule } from '../shared/material/material.module';
import { RouterModule } from '@angular/router';
import {routesReservasVendedor} from './reservas-vendedor-routing.module';
import { ReservasVCardComponent } from './reservas-v-card/reservas-v-card.component';
import { ReservaVDetalleComponent } from './reserva-v-detalle/reserva-v-detalle.component';
import { ReservaVAddComponent } from './reserva-v-add/reserva-v-add.component'



@NgModule({
  declarations: [
    ReservasListComponent,
    HomePageVendedorComponent,
    ReservasVCardComponent,
    ReservaVDetalleComponent,
    ReservaVAddComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routesReservasVendedor)
  ]
})
export class ReservasVendedorModule { }
