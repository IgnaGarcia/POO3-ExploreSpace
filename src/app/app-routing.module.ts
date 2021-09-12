import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexPage } from './pages/index/index.page';
import { GaleryPage } from './pages/galery/galery.page';
import { NotFoundPage } from './pages/notFound/notFound.page';

const routes: Routes = [
  { path: 'inicio', component: IndexPage },
  { path: 'galeria', component: GaleryPage },
  { path: '',   redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', component: NotFoundPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
