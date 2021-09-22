import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexPage } from './pages/index/index.page';
import { GaleryPage } from './pages/gallery/gallery.page';
import { CalendarPage } from './pages/calendar/calendar.page';
import { LaunchesPage } from './pages/launches/launches.page';
import { SpaceXPage } from './pages/spaceX/spacex.page';
import { NotFoundPage } from './pages/notFound/notFound.page';

const routes: Routes = [
  { path: 'inicio', component: IndexPage },
  { path: 'galeria', component: GaleryPage },
  { path: 'calendario', component: CalendarPage },
  { path: 'lanzamientos', component: LaunchesPage },
  { path: 'spacex', component: SpaceXPage },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', component: NotFoundPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
