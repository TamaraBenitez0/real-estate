import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routes } from './user-vendedor-routing.module';
import { UserVendedorComponent } from './user-vendedor.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [UserVendedorComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
    
  ],
  exports:[UserVendedorComponent]
})
export class UserVendedorModule { }
