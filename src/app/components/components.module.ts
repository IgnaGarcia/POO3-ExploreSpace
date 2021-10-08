import { NgModule } from '@angular/core';

import { NormalEventComponent } from './calendar/normal-event/normal-event.component';

@NgModule({
  declarations: [
    NormalEventComponent
  ],
  exports: [
    NormalEventComponent
  ]
})
export class ComponentsModule { }