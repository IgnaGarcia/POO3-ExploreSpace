import { Component, Input } from '@angular/core';
import { Dragon } from 'src/app/models/dragon.model';

//TODO: cards de dragons
@Component({
    selector: 'dragon-card',
    templateUrl: './dragon.component.html',
    styleUrls: ['./dragon.component.scss']
})
export class DragonCardComponent { 
    @Input() dragon: Dragon;
}