import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from 'src/app/components/components.module';

import { SpaceXComponent } from './spacex.component';

@NgModule({
  declarations: [
    SpaceXComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [SpaceXComponent]
})
export class SpaceXModule { }