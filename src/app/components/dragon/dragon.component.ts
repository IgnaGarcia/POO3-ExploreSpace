import { Component, Input } from '@angular/core';
import { Dragon } from 'src/app/models/dragon.model';

//TODO: icono de wiki
@Component({
    selector: 'dragon-card',
    templateUrl: './dragon.component.html',
    styleUrls: ['./dragon.component.scss']
})
export class DragonCardComponent { 
    @Input() dragon: Dragon;
}