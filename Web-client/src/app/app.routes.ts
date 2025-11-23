import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { navigationGuard } from './guards/navigation.guard';

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
        canActivate: [authGuard],
        children: [
            { path: "", redirectTo: "home", pathMatch: "full" },
            {
                path: "home",
                loadComponent: () => import('./pages/client/client-home-page/client-home-page').then(c => c.ClientHomePage)
            },
            {
                path: "coaches",
                loadComponent: () => import('./pages/client/coaches-page/coaches-page').then(c => c.CoachesPage),
                canActivate: [navigationGuard]
            },
            {
                path: "teams",
                loadComponent: () => import('./pages/client/teams-page/teams-page').then(c => c.TeamsPage),
                canActivate: [navigationGuard]
            },
            {
                path: "players",
                loadComponent: () => import('./pages/client/players-page/players-page').then(c => c.PlayersPage),
                canActivate: [navigationGuard]
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
