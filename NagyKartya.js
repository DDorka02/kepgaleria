import { KEPEK } from "./adatok.js";

export default class NagyKartya {
    #index
    #taroloELEM
    #source

    constructor(index,taroloELEM){
        this.#index=index
        this.#taroloELEM=taroloELEM
        this.#taroloELEM.empty()
        this.#source= KEPEK[index]
        this.kepKiir()
        this.jobbELEM=$(".jobb")

        this.balELME=$(".bal")
    }

    kepKiir(){
        this.#taroloELEM.append(`
            <img src="${this.#source.kep}" alt="${this.#source.cim}"></img>`)
          }
    }
