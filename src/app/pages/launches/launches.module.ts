import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LaunchesComponent } from './launches.component';

@NgModule({
    declarations: [LaunchesComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [LaunchesComponent],
})
export class LaunchesModule { }