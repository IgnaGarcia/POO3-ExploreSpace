import { Explore } from '../models/explore.model';

//TODO: cargar data
export const ExploreMock: Explore[] = [
    {
        id: 0,
        name: 'Eyes - NASA',
        details: 'Pagina de la NASA donde prodras explorar el universo a travez de los lentes de los satelites o visualizaciones en 3D.',
        url: 'https://eyes.nasa.gov',
        banner: "assets/img/banner.jpg",
        images: ["assets/img/eyes/eyes1.png", "assets/img/eyes/eyes2.png", "assets/img/eyes/eyes3.png", "assets/img/eyes/eyes4.png"]
    },
    {
        id: 1,
        name: '100000 Stars',
        details: 'Maravilloso lugar para dar un recorrido a travez de la inmensidad de nuestra galaxia, la Via Lactea.',
        url: 'https://stars.chromeexperiments.com',
        banner: 'assets/img/banner.jpg',
        images: ["assets/img/100000stars/100000stars.png", "assets/img/100000stars/100000stars2.png", "assets/img/100000stars/100000stars3.png", "assets/img/100000stars/100000stars4.png", "assets/img/100000stars/100000stars5.png"]
    },
    {
        id: 2,
        name: 'SpaceX',
        details: 'string',
        url: 'https://www.spacex.com/',
        banner: 'assets/img/banner.jpg',
        images: ["assets/img/banner.jpg", "assets/img/banner.jpg"]
    },
    {
        id: 3,
        name: 'NASA',
        details: 'string',
        url: 'https://www.nasa.gov/',
        banner: 'assets/img/banner.jpg',
        images: ["assets/img/banner.jpg", "assets/img/banner.jpg", "assets/img/banner.jpg", "assets/img/banner.jpg", "assets/img/banner.jpg"]
    },
    {
        id: 4,
        name: 'La NASA Español',
        details: 'string',
        url: 'https://www.lanasa.net/',
        banner: 'assets/img/banner.jpg',
        images: ["assets/img/banner.jpg", "assets/img/banner.jpg", "assets/img/banner.jpg"]
    },
    {
        id: 5,
        name: 'SKY & TELESCOPE',
        details: 'string',
        url: 'https://skyandtelescope.org/',
        banner: 'assets/img/banner.jpg',
        images: ["assets/img/banner.jpg", "assets/img/banner.jpg", "assets/img/banner.jpg"]
    },
    {
        id: 6,
        name: 'NASA Kids',
        details: 'string',
        url: 'https://spaceplace.nasa.gov/sp/kids/',
        banner: 'assets/img/banner.jpg',
        images: ["assets/img/banner.jpg", "assets/img/banner.jpg", "assets/img/banner.jpg"]
    }
]