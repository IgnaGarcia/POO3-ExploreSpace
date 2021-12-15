import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IndexComponent } from './index.component';
import { YoutuberCardComponent } from './youtuber-card/youtuber.component';

import { ComponentsModule } from 'src/app/components/components.module';
@NgModule({
  declarations: [
    IndexComponent,
    YoutuberCardComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [IndexComponent]
})
export class IndexModule { }