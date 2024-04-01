import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageGraphicComponent } from './home-page-graphic/home-page-graphic.component';
import { GraphicUserComercialComponent } from './graphic-user-comercial.component';
import { BarChartComponent } from '../bar-chart/bar-chart.component';

export const routesGraphic: Routes = [
  {
    path:'',
    component: HomePageGraphicComponent,
    children:[
      {
        path:'',
        component: GraphicUserComercialComponent
        
      },
      { path: 'bar-chart', component: BarChartComponent },
    ]

}
];

