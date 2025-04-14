import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { PlaylistComponent } from './features/playlist/playlist.component';

const routes: Routes = [
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
    path: '/playlis',
    component: PlaylistComponent
  },
  // {
  //   path: 'premium',
  //   component: PremiumComponent
  // },
  // {
  //   path: 'schedule',
  //   component: ScheduleComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
