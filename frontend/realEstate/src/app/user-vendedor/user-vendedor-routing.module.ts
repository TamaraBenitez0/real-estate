import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserVendedorComponent } from './user-vendedor.component';

// Si lo quieren usar sin un template Layout
 export const routes: Routes = [
  {
    path: '',
    component: UserVendedorComponent
   }
 ];


