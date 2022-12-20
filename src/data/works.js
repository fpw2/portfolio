import Booki from "../assets/work/booki.png";
import ohmyfood from "../assets/work/ohmyfood.png";
import Fisheye from "../assets/work/fisheye.png";
import LesPetitsPlats from "../assets/work/les_petits_plats.png";
import Kasa from "../assets/work/kasa.png";
import SuperM from "../assets/work/SuperM.png";
import html5 from "../assets/icons/html5.ico";
import css3 from "../assets/icons/css3.ico";
import scss from "../assets/icons/scss.ico";
import js from "../assets/icons/js.ico";
import react from "../assets/icons/react.ico";

// doit respecter le format JSON
export const works = [
    {
        "id": "1",
        "title": "Booki",
        "describe": "Model of a website that allows users to find accommodation and activities in the city of their choice.",
        "img": Booki,
        "technology": [html5, css3],
        "link": "https://fpw-booki.netlify.app"
    },
    {
        "id": "2",
        "title": "Ohmyfood",
        "describe": "Mockup of a mobile site that lists gourmet restaurant menus. In addition to traditional reservation systems, customers will be able to compose their meal menu so that the dishes are ready when they arrive.",
        "img": ohmyfood,
        "technology": [html5, scss],
        "link": "https://fpw2.github.io/ohmyfood"
    },
    {
        "id": "3",
        "title": "Fisheye",
        "describe": "Website that allows freelance photographers to showcase their best work.",
        "img": Fisheye,
        "technology": [html5, css3, js],
        "link": "https://fpw-fisheye.netlify.app"
    },
    {
        "id": "4",
        "title": "Les petits plats",
        "describe": "Cooking recipe site with an advanced search system.",
        "img": LesPetitsPlats,
        "technology": [html5, css3, js],
        "link": "https://fpw2.github.io/les-petits-plats"
    },
    {
        "id": "5",
        "title": "Kasa",
        "describe": "Web platform for the rental of apartments between individuals.",
        "img": Kasa,
        "technology": [html5, css3, js],
        "framework": [react],
        "link": "https://fpw-kasa.netlify.app"
    },
    {
        "id": "6",
        "title": "SuperM",
        "describe": "Supermarket site for shopping.",
        "img": SuperM,
        "technology": [html5, css3, js],
        "framework": [react],
        "link": "https://fpw-supermarket.netlify.app"
    },
]