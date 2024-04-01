import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { inject } from '@angular/core';

export const redireccionGuard: CanActivateFn = (route, state) => {

  console.log('Redireccion Guard', route);

  const authService = inject(AuthService);
  const router = inject(Router);

  const currentRol = authService.currentUser()?.role;

  if (currentRol === 'comercial') {
    router.navigateByUrl('reservasComercial')
    return true;
  } else if (currentRol === 'administrador') {
    router.navigateByUrl('productos')
    return true;
  } else if(currentRol === 'vendedor') {
    router.navigateByUrl('userVendedor')
    return true;
  }


  router.navigateByUrl('/auth/login');
  return true;
};