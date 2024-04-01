import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

    path:'reservasVendedor',
    canActivate:[authGuard],
    data:{ roles: ['administrador', 'vendedor']},
    loadChildren:() => import('./reservas-vendedor/reservas-vendedor.module')
    .then(m => m.ReservasVendedorModule)

  }, 
  {
    path:'reservasComercial',
    canActivate:[authGuard],
    data:{ roles: ['administrador', 'comercial']},
    loadChildren: () => import('./reservas-comercial/reservas-comercial.module')
    .then(m => m.ReservasComercialModule)

  },

  {
    path:'userVendedor',
    canActivate:[authGuard],
    data:{ roles: ['administrador', 'vendedor']},
    loadChildren:() => import('./user-vendedor/user-vendedor.module')
    .then(m => m.UserVendedorModule)
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
