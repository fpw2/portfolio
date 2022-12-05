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

export const works = [
    {
        id: 1,
        title: "Booki",
        img: Booki,
        technology: [html5, css3],
        link: "https://fpw-booki.netlify.app"
    },
    {
        id: 2,
        title: "Ohmyfood",
        img: ohmyfood,
        technology: [html5, scss],
        link: "https://fpw2.github.io/ohmyfood"
    },
    {
        id: 3,
        title: "Fisheye",
        img: Fisheye,
        technology: [html5, css3, js],
        link: "https://fpw-fisheye.netlify.app"
    },
    {
        id: 4,
        title: "Les petits plats",
        img: LesPetitsPlats,
        technology: [html5, css3, js],
        link: "https://fpw2.github.io/les-petits-plats"
    },
    {
        id: 5,
        title: "Kasa",
        img: Kasa,
        technology: [react],
        link: "https://fpw-kasa.netlify.app"
    },
    {
        id: 6,
        title: "SuperM",
        img: SuperM,
        technology: [react],
        link: "https://fpw-supermarket.netlify.app"
    },
]