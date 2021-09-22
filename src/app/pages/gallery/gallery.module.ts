import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GalleryComponent } from './gallery.component';

@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [GalleryComponent]
})
export class GaleryModule { }