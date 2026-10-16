import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth-service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const authService = inject(AuthService)

  if (!authService.isLoggedIn()) {
    router.navigate(['/login'])
    return false
  }

  const expectedRoles = route.data['roles'] as string[]

  if (!expectedRoles || expectedRoles.length === 0) {
    return true;
  }

  const userPerfis = authService.getPerfis();

  const hasPermission = expectedRoles.some(role => userPerfis.includes(role))

  if (hasPermission) {
    return true;
  }

  alert('Acesso negado: Você não tem permissão para acessar esta página.');
  router.navigate(['/login']);
  return false;
};
