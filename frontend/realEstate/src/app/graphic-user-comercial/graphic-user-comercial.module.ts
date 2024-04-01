import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageGraphicComponent } from './home-page-graphic/home-page-graphic.component';
import { MaterialModule } from '../shared/material/material.module';
import { GraphicUserComercialComponent } from './graphic-user-comercial.component';
import { RouterModule } from '@angular/router';
import { routesGraphic } from './graphic-user-comercial-routing.module';
import { BarChartComponent } from '../bar-chart/bar-chart.component';


@NgModule({
  declarations: [
    HomePageGraphicComponent,
    GraphicUserComercialComponent,
    BarChartComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routesGraphic)
  ],
  exports:[BarChartComponent]
})
export class GraphicUserComercialModule { }
