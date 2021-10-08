import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CalendarComponent } from './calendar.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [CalendarComponent]
})
export class CalendarModule { }