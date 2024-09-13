import { KEPEK } from "./adatok.js";

export default class Kartya {
    #index
    #taroloELEM
    #source

    constructor(index,taroloELEM){
        this.#index=index
        this.#taroloELEM=taroloELEM
        this.#taroloELEM.empty()
        this.#source= KEPEK[index]
        this.kepKiir()
    }

    kepKiir(){
        
        this.#taroloELEM.append(`
            <img src="${this.#source.kep}" alt="${this.#source.cim}"></img>`)
          }
    }
