import { Component } from '@angular/core';

//NTH: icono de astronauta perdido en el espacio
//NTH: mensaje de pagina no encontrada
//NTH: boton para ir al inicio del website
@Component({
    selector: 'notFound-page',
    templateUrl: './notFound.component.html',
    styleUrls: ['./notFound.component.scss']
})

export class NotFoundComponent {

    constructor() {
        console.log('load galery page');
    }
}