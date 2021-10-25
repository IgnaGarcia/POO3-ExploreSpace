import { Component, Input } from '@angular/core';

@Component({
    selector: 'image-card',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss']
})
export class ImageCardComponent { 
    @Input() image: string;
}