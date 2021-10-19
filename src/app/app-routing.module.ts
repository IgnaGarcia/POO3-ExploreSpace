import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { LaunchesComponent } from './pages/launches/launches.component';
import { SpaceXComponent } from './pages/spaceX/spacex.component';
import { NotFoundComponent } from './pages/notFound/notFound.component';

const routes: Routes = [
  { path: 'inicio', component: IndexComponent },
  { path: 'calendario', component: CalendarComponent },
  { path: 'galeria', component: GalleryComponent },
  { path: 'lanzamientos', component: LaunchesComponent },
  { path: 'spacex', component: SpaceXComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
