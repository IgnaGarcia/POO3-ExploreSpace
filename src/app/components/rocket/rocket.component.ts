import { Component, Input } from '@angular/core';
import { Rocket } from 'src/app/models/rocket.model';

@Component({
    selector: 'rocket-card',
    templateUrl: './rocket.component.html',
    styleUrls: ['./rocket.component.scss']
})
export class RocketCardComponent { 
    @Input() rocket: Rocket;
}