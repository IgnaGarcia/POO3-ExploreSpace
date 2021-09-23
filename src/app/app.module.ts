import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { IndexModule } from './pages/index/index.module';
import { LaunchesModule } from './pages/launches/launches.module';
import { GaleryModule } from './pages/gallery/gallery.module';
import { SpaceXModule } from './pages/spaceX/spacex.module';
import { CalendarModule } from './pages/calendar/calendar.module';
import { NotFoundModule } from './pages/notFound/notFount.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IndexModule,
    LaunchesModule,
    SpaceXModule,
    GaleryModule,
    CalendarModule,
    NotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
