import { Component, Input } from '@angular/core';
import { Base } from 'src/app/models/base.model';

//TODO: cards de bases
@Component({
    selector: 'base-card',
    templateUrl: './base.component.html',
    styleUrls: ['./base.component.scss']
})
export class BaseCardComponent { 
    @Input() base: Base;
}