import { Explore } from '../models/explore.model';

//TODO: cargar data
export const ExploreMock: Explore[] = [
    {
        id: 0,
        name: 'Eyes - NASA',
        details: 'Pagina de la NASA donde prodras explorar el universo a travez de los lentes de los satelites o visualizaciones en 3D.',
        url: 'https://eyes.nasa.gov',
        banner: "assets/img/eyes/eyes1.png",
        images: [
            "assets/img/eyes/eyes2.png", 
            "assets/img/eyes/eyes3.png", 
            "assets/img/eyes/eyes4.png"
        ]
    },
    {
        id: 1,
        name: '100000 Stars',
        details: 'Maravilloso lugar para dar un recorrido a travez de la inmensidad de nuestra galaxia, la Via Lactea.',
        url: 'https://stars.chromeexperiments.com',
        banner: "assets/img/100000stars/100000stars.png",
        images: [
            "assets/img/100000stars/100000stars2.png", 
            "assets/img/100000stars/100000stars3.png", 
            "assets/img/100000stars/100000stars4.png", 
            "assets/img/100000stars/100000stars5.png"
        ]
    },
    {
        id: 2,
        name: 'SpaceX',
        details: 'Pagina oficial de la empresa privada SpaceX, donde sube noticias, informacion sobre las tecnologias que utiliza, sus misiones y demas contenido de interes.',
        url: 'https://www.spacex.com/',
        banner: "assets/img/spaceX/spaceX4.png",
        images: [
            "assets/img/spaceX/spaceX1.png", 
            "assets/img/spaceX/spaceX2.png",
            "assets/img/spaceX/spaceX3.png",
            "assets/img/spaceX/spaceX5.png",
        ]
    },
    {
        id: 3,
        name: 'NASA',
        details: 'Sitio oficial de la NASA, agencia de exploracion espacial con mas renombre.',
        url: 'https://www.nasa.gov/',
        banner: 'assets/img/NASA/5.png',
        images: [
            "assets/img/NASA/1.png", 
            "assets/img/NASA/2.png",
            "assets/img/NASA/3.png",
            "assets/img/NASA/4.png",
        ]
    },
    {
        id: 4,
        name: 'La NASA Español',
        details: 'Sitio de la NASA con traducciones al español, todas las novedades, eventos astronomicos, entrevistas y todo lo necesario para mantenerse al dia.',
        url: 'https://www.lanasa.net/',
        banner: 'assets/img/nasaES/1.png',
        images: [
            "assets/img/nasaES/1.png", 
            "assets/img/nasaES/2.png",
            "assets/img/nasaES/3.png",
            "assets/img/nasaES/4.png",
        ]
    },
    {
        id: 5,
        name: 'SKY & TELESCOPE',
        details: 'Blog de noticias interesantes, con tutoriales y herramientas utiles, todo orientado a la observacion del cielo y las extrellas.',
        url: 'https://skyandtelescope.org/',
        banner: 'assets/img/skyTelescope/0.png',
        images: [
            "assets/img/skyTelescope/1.png", 
            "assets/img/skyTelescope/2.png",
            "assets/img/skyTelescope/3.png",
            "assets/img/skyTelescope/4.png",
            "assets/img/skyTelescope/5.png",
        ]
    },
    {
        id: 6,
        name: 'NASA Kids',
        details: 'Pagina super didactica llena de articulos y juegos para aprender jugando, ideal para infantes.',
        url: 'https://spaceplace.nasa.gov/sp/kids/',
        banner: 'assets/img/nasaKids/0.png',
        images: [
            "assets/img/nasaKids/1.png", 
            "assets/img/nasaKids/2.png",
            "assets/img/nasaKids/3.png",
            "assets/img/nasaKids/4.png",
            "assets/img/nasaKids/5.png",
        ]
    }
]