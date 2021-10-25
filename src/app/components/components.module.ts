import { NgModule } from '@angular/core';
import { BaseCardComponent } from './base/base.component';
import { CommonModule } from '@angular/common';

import { NormalEventComponent } from './calendar/normal-event/normal-event.component';
import { DragonCardComponent } from './dragon/dragon.component';
import { MemberCardComponent } from './member/member.component';
import { RocketCardComponent } from './rocket/rocket.component';
import { ImageCardComponent } from './image-card/image.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NormalEventComponent,
    RocketCardComponent,
    MemberCardComponent,
    DragonCardComponent,
    BaseCardComponent,
    ImageCardComponent
  ],
  exports: [
    NormalEventComponent,
    RocketCardComponent,
    MemberCardComponent,
    DragonCardComponent,
    BaseCardComponent,
    ImageCardComponent
  ]
})
export class ComponentsModule { }