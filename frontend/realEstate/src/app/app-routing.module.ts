import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComercialComponent } from './user-comercial/user-comercial.component';

const routes: Routes = [

   { 
      path:'productos',
      loadChildren:() => import('./productos/productos.module')
      .then(m => m.ProductosModule)
  
  } , 
  {
    path:'',
    component: UserComercialComponent
  },{
    path:'auth',
    loadChildren:() => import('../app/auth/auth.module')
    .then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
