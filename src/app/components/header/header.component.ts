import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    @ViewChild('sidenav') sidenav: MatSidenav;


    close(reason: string) {
        this.sidenav.close();
    }
}