import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CalendarComponent } from './calendar.component';

@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CalendarComponent]
})
export class CalendarModule { }