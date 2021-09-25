import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NotFoundComponent } from './notFound.component';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [NotFoundComponent]
})

export class NotFoundModule { }