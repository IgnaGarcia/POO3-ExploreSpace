import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { LaunchesComponent } from './launches.component';

@NgModule({
  declarations: [
    LaunchesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [LaunchesComponent]
})

export class LaunchesModule { }