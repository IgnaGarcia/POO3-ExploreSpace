import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

//TODO: onscroll up que se muestre con fondo mas transparente y borde
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