import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routesComercial } from './reservas-comercial-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { HomePageComercialComponent } from './home-page-comercial/home-page-comercial.component';
import { ReservasListComercialComponent } from './reservas-list-comercial/reservas-list-comercial.component';
import { ReservasCCardComponent } from './reservas-c-card/reservas-c-card.component';
import { ReservasCDetalleComponent } from './reservas-c-detalle/reservas-c-detalle.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ 
    HomePageComercialComponent,
    ReservasListComercialComponent,
    ReservasCCardComponent,
    ReservasCDetalleComponent
  
  
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routesComercial)
  
  ]
})
export class ReservasComercialModule { }
