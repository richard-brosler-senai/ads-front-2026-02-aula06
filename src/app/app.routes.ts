import { Routes } from '@angular/router';
import { Home } from './componentes/home/home';
import { Games } from './componentes/games/games';
import { LoginNgif } from './componentes/login-ngif/login-ngif';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'games',
        component: Games
    },
    {
        path: 'login',
        component: LoginNgif
    },
    {
        path: '**',
        redirectTo: ''
    }
];

