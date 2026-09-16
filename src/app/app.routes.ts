import { Routes } from '@angular/router';
import { Home } from './componentes/home/home';
import { Games } from './componentes/games/games';

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
        path: '**',
        redirectTo: ''
    }
];

