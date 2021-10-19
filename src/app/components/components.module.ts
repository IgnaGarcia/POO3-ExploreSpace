import { NgModule } from '@angular/core';
import { BaseCardComponent } from './base/base.component';

import { NormalEventComponent } from './calendar/normal-event/normal-event.component';
import { DragonCardComponent } from './dragon/dragon.component';
import { MemberCardComponent } from './member/member.component';
import { RocketCardComponent } from './rocket/rocket.component';

@NgModule({
  declarations: [
    NormalEventComponent,
    RocketCardComponent,
    MemberCardComponent,
    DragonCardComponent,
    BaseCardComponent
  ],
  exports: [
    NormalEventComponent,
    RocketCardComponent,
    MemberCardComponent,
    DragonCardComponent,
    BaseCardComponent
  ]
})
export class ComponentsModule { }