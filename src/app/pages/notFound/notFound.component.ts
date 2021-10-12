import { Component } from '@angular/core';

//TODO: icono de astronauta perdido en el espacio
//TODO: mensaje de pagina no encontrada
//TODO: boton para ir al inicio del website
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