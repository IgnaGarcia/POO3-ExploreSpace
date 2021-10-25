import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from 'src/app/components/components.module';

import { LaunchesComponent } from './launches.component';

@NgModule({
    declarations: [LaunchesComponent],
    imports: [
        BrowserModule,
        ComponentsModule
    ],
    providers: [],
    bootstrap: [LaunchesComponent],
})
export class LaunchesModule { }