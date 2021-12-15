import { Component, Input } from '@angular/core';
import { Youtuber } from 'src/app/models/youtuber.model';

@Component({
    selector: 'youtuber-card',
    templateUrl: './youtuber.component.html',
    styleUrls: ['./youtuber.component.scss']
})
export class YoutuberCardComponent { 
    @Input() youtuber: Youtuber;
}