import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'notFound-page',
    templateUrl: './notFound.component.html',
    styleUrls: ['./notFound.component.scss']
})

export class NotFoundComponent {

    constructor(private router: Router) { }

    btnClick(url: string){
        this.router.navigateByUrl(url)
    }
}