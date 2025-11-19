import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: "login",
        loadComponent: () => import('./pages/login/login').then(c => c.Login),
        canActivate: [authGuard]
    },
    {
        path: "register",
        loadComponent: () => import('./pages/register/register').then(c => c.Register),
        canActivate: [authGuard]
    },
    {
        path: "admin",
        loadComponent: () => import('./pages/admin/admin').then(c => c.Admin),
        canActivate: [authGuard]
    },
    {
        path: "client",
        loadComponent: () => import('./pages/client/client').then(c => c.Client),
        canActivate: [authGuard]
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
