import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routes } from './user-vendedor-routing.module';
import { UserVendedorComponent } from './user-vendedor.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { TabsProductosComponent } from './tabs-productos/tabs-productos.component';
import { TabsReservasComponent } from './tabs-reservas/tabs-reservas.component';


@NgModule({
  declarations: [UserVendedorComponent, TabsProductosComponent, TabsReservasComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
    
  ],
  exports:[UserVendedorComponent, TabsProductosComponent, TabsReservasComponent]
})
export class UserVendedorModule { }
