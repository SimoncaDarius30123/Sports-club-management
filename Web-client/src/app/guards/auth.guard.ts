import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('AUTH_TOKEN');

  const publicRoutes = ['/login', '/register'];

  if (!token) {
    // daca nu e token, toate rutele necunoscute merg la /login
    return publicRoutes.includes(state.url) ? true : router.parseUrl('/login');
  }

  // decode token
  const payload = decodeJwt(token);
  const role = payload?.role;

  if (!role) return router.parseUrl('/login');

  if (role === 'ADMIN') {
    // admin merge doar pe /admin
    return state.url.startsWith('/admin') ? true : router.parseUrl('/admin');
  }

  if (role === 'CLIENT') {
    // client merge doar pe /client
    return state.url.startsWith('/client') ? true : router.parseUrl('/client');
  }

  // fallback final
  return router.parseUrl('/login');
};

function decodeJwt(token: string): any {
  try {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  } catch {
    return null;
  }
}
