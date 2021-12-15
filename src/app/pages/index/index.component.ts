import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Launch } from 'src/app/models/launch.model';
import { Apod } from 'src/app/models/apod.model';
import { SpaceXService } from 'src/app/services/spacex.service';
import { ApodService } from '../../services/apod.service'
import { DomSanitizer, SafeUrl} from '@angular/platform-browser';
import { Youtuber } from 'src/app/models/youtuber.model';
import { YoutuberMock } from 'src/app/mock/youtuber.mock';

@Component({
    selector: 'index-page',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent {
    launches: Array<Launch>;
    gallery: Array<Apod>;
    exploreGallery: string[];
    launch: Launch;
    safeURL: SafeUrl;
    youtubers: Youtuber[] = YoutuberMock

    constructor(private _spaceXService: SpaceXService, private router: Router, private _apodService: ApodService, private sanitizer: DomSanitizer) {
        this.launches = new Array<Launch>();
        this.gallery = new Array<Apod>();
        this.exploreGallery = ["assets/img/eyes/eyes1.png","assets/img/100000stars/100000stars2.png","assets/img/banner.jpg"];
    }

    ngOnInit() {
        this._spaceXService.getLatestLaunches()
            .subscribe((res: Launch) => {
                this.launch = res
                let ytBase = "https://www.youtube.com/embed/";
                let splited = this.launch.links.webcast.split("/")

                this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(`${ytBase}${splited[splited.length - 1]}`);
                console.log(this.safeURL);
            })
            
        this._spaceXService.getUpcomingLaunches()
            .subscribe((res: Array<Launch>) => this.launches.push(...res))
        this._apodService.getApods('2021-10-27', '2021-10-29')
            .subscribe((res: Array<Apod>) =>  this.gallery.push(...res) );
    }
    
    btnClick(url: string){
        this.router.navigateByUrl(url)
    }

    formatDate() {
        const dateObj = new Date(this.launch.date_unix * 1000);
        if(this.launch.tbd == true){
            return 'Indefinida'
        }
        let str = `${dateObj.getFullYear()}`
        if(this.launch.date_precision == 'hour'){
            str = `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${str} ${dateObj.getHours()}:00`;
        }
        else if (this.launch.date_precision == 'day'){
            str = `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${str}`;
        }
        else if (this.launch.date_precision == 'month'){
            str = `${dateObj.getMonth() + 1}/${str}`;
        }
        else if (this.launch.date_precision == 'year'){
            str = str;
        }
        else if (this.launch.date_precision == 'quarter'){
            str = `${Math.floor((dateObj.getMonth() + 1) / 4)}° Cuarto de ${str}`;
        }
        else if (this.launch.date_precision == 'half'){
            str = `${Math.floor((dateObj.getMonth() + 1) / 2)}° Mitad de ${str}`;
        }
        return str;
    }
}
 