import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComercialComponent } from './user-comercial/user-comercial.component';
import { authGuard } from './auth/guard/auth.guard';
import { redireccionGuard } from './auth/guard/redireccion.guard';
import { ProductosComponent } from './productos/productos.component';
import { isNotAuthenticatedGuard } from './auth/guard/is-not-authenthicated.guard';

const routes: Routes = [

   { 
      path:'productos',
      canActivate:[authGuard],
      data:{ roles: ['administrador', 'vendedor']},
      loadChildren:() => import('./productos/productos.module')
      .then(m => m.ProductosModule)
  
  } , 
  {
    path:'userComercial',
    canActivate:[authGuard],
    data:{ roles: ['comercial','administrador']},
    component: UserComercialComponent
  },
  
  
  {
    path:'auth',
    canActivate: [isNotAuthenticatedGuard],
    loadChildren:() => import('../app/auth/auth.module')
    .then(m => m.AuthModule)
  },
  {
    // dominion.com/'' --> monta el componente Productos
    path: '',
    canActivate:[redireccionGuard],
    component: ProductosComponent,
  },
  {
    path: '**',
    redirectTo: 'auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
