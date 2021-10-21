import { Component, Input } from '@angular/core';
import { Base } from 'src/app/models/base.model';

//TODO: icono wikipedia
@Component({
    selector: 'base-card',
    templateUrl: './base.component.html',
    styleUrls: ['./base.component.scss']
})
export class BaseCardComponent { 
    @Input() base: Base;

    ngOnInit() {
        console.dir(this.base)
    }

    getSuccessRate(succes: number, attempts: number){
        return Math.round(((succes * 100) / attempts) * 100) / 100
    }
}