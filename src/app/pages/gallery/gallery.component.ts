import { Component } from '@angular/core';
import { Apod } from 'src/app/models/apod.model';
import { ApodService } from '../../services/apod.service'
import { DomSanitizer, SafeUrl} from '@angular/platform-browser';

//TODO: imagenes onClick que carguen un overlay con la descripcion
//NTH: boton de traducir automaticamente en cada descripcion visualizada
@Component({
    selector: 'gallery-page',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
    last_end: number;
    last_start: number;
    firstApod: Apod;
    safeURL: SafeUrl;
    gallery: Array<Apod>;
    loading: Boolean= true;

    constructor(private _apodService: ApodService, private sanitizer: DomSanitizer) {
        this.gallery = new Array<Apod>();
    }

    ngOnInit() {
        let today = Date.now()
        this.last_end = today;
        this.last_start = this.sub10Days(today);

        this._apodService.getApods(this.nToDateStr(this.last_start), this.nToDateStr(this.last_end))
            .subscribe((res: Array<Apod>) => {
                this.firstApod = res[res.length-1];
                this.pushToGalery(res)
                this.loading = false;
            });
    }

    getUrl(): string {
        return this.firstApod.hdurl || this.firstApod.url;
    }

    sub10Days(end_date: number): number {
        return end_date - (10 * 24 * 60 * 60 * 1000);
    }

    nToDateStr(date: number): string {
        return (new Date(date)).toISOString().split('T')[0];
    }

    loadMore(){
        this.last_end = this.last_start
        this.last_start = this.sub10Days(this.last_end)
        this._apodService.getApods(this.nToDateStr(this.last_start), this.nToDateStr(this.last_end))
            .subscribe((res: Array<Apod>) => this.pushToGalery(res));
    }

    pushToGalery(res: Array<Apod>){
        this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.getUrl());
        this.gallery.push(...res.slice(0, res.length-1).reverse())
    }

}