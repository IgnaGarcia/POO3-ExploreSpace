import { Component, Input } from '@angular/core';
import { Crew } from 'src/app/models/crew.model';

@Component({
    selector: 'member-card',
    templateUrl: './member.component.html',
    styleUrls: ['./member.component.scss']
})
export class MemberCardComponent { 
    @Input() member: Crew;
}