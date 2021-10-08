import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IndexComponent } from './index.component';
import { NormalEventComponent } from 'src/app/components/calendar/normal-event/normal-event.component';
@NgModule({
  declarations: [
    IndexComponent,
    NormalEventComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [IndexComponent]
})
export class IndexModule { }