import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routes } from './user-vendedor-routing.module';
import { UserVendedorComponent } from './user-vendedor.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { HomePageComponent } from './home-page/home-page.component';
import { TabsProductosComponent } from './tabs-productos/tabs-productos.component';
import { TabsReservasComponent } from './tabs-reservas/tabs-reservas.component';


@NgModule({
  declarations: [UserVendedorComponent, HomePageComponent, TabsProductosComponent, TabsReservasComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
    
  ],
  exports:[UserVendedorComponent]
})
export class UserVendedorModule { }
