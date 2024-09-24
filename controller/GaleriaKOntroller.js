import { KEPEK } from "../model/adatok.js";
import Modell from "./model/Model.js";
import Jatekter from "./view/Jatekter.js";
import NagyKartya from "./view/NagyKartya.js";

export default class GaleriaKontroller{

    constructor(){
    this.TARTALOM = $(".galeria");
    this.kivElem = $(".belsokep");
    this.modell= new Modell(KEPEK)
    this.index= modell.getIndex();
    new NagyKartya(2, kivElem);
    new Jatekter(KEPEK, TARTALOM);
    const modell = new Modell(KEPEK);
    this.#kivesemenykezelo()
    this.#jobbesemenykezelo()
    this.#balesemenykezelo()

    }

    #kivesemenykezelo(){
        $(window).on("belsokep", (event) => {
            console.log(event.detail);
            kivElem.empty();
            modell.setIndex(event.detail.id)
            new NagyKartya(event.detail, kivElem);
            });
    }

    #jobbesemenykezelo(){
        $(window).on("jobb", (event) => {
            modell.letetJObb();
            kivElem.empty();
            new NagyKartya(KEPEK[index], kivElem);
            });
    }

    #balesemenykezelo(){
        $(window).on("bal", (event) => {
            modell.letetBAl();
            kivElem.empty();
            new NagyKartya(KEPEK[index], kivElem);
            });
    }
}