import { Component, Input } from '@angular/core';
import { Launch } from 'src/app/models/launch.model';

//TODO: icono desde fontawesome, icomoon o como paso luqui
@Component({
    selector: 'normal-event-component',
    templateUrl: './normal-event.component.html',
    styleUrls: ['./normal-event.component.scss']
})
export class NormalEventComponent { 
    @Input() event: Launch;
    fireDate: String;

    formatDate() {
        const dateObj = new Date(this.event.date_unix * 1000);
        if(this.event.tbd == true){
            return 'Indefinida'
        }
        let str = `${dateObj.getFullYear()}`
        if(this.event.date_precision == 'hour'){
            str = `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${str} ${dateObj.getHours()}:00`;
        }
        else if (this.event.date_precision == 'day'){
            str = `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${str}`;
        }
        else if (this.event.date_precision == 'month'){
            str = `${dateObj.getMonth() + 1}/${str}`;
        }
        else if (this.event.date_precision == 'year'){
            str = str;
        }
        else if (this.event.date_precision == 'quarter'){
            str = `${Math.floor((dateObj.getMonth() + 1) / 4)}° Cuarto de ${str}`;
        }
        else if (this.event.date_precision == 'half'){
            str = `${Math.floor((dateObj.getMonth() + 1) / 2)}° Mitad de ${str}`;
        }
        return str;
    }
}