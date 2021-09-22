import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Launch } from 'src/app/models/launch.model';
import { SpaceXService } from 'src/app/services/spacex.service';

import { LaunchesComponent } from './launches.component';

@NgModule({
    declarations: [LaunchesComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [LaunchesComponent],
})
export class LaunchesModule { }