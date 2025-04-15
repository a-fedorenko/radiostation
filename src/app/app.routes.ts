import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { PlaylistComponent } from './features/playlist/playlist.component';
import { ScheduleComponent } from './features/schedule/schedule.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'playlist',
        component: PlaylistComponent,
    },
    {
        path: 'schedule',
        component: ScheduleComponent,
    },
];
