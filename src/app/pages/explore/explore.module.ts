import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ExploreComponent } from './explore.component';
import { CardExploreComponent } from './card/cardExplore.component';

@NgModule({
  declarations: [
    ExploreComponent,
    CardExploreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ExploreComponent]
})

export class ExploreModule { }