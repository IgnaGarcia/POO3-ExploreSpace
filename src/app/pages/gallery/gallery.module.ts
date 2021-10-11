import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GalleryComponent } from './gallery.component';
import { ApodComponent } from './apod/apod.component';
@NgModule({
  declarations: [
    GalleryComponent,
    ApodComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [GalleryComponent]
})
export class GaleryModule { }