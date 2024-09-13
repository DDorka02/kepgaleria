import { KEPEK } from "./adatok.js";

export default class Kartya {
    #index
    #taroloELEM
    #source

    constructor(index,taroloELEM){
        this.#index=index
        this.#taroloELEM=taroloELEM
        this.#taroloELEM.empty()
        this.#source= KEPEK[index].kep
        this.kepKiir()
    }

    kepKiir(){
        
        this.#taroloELEM.append(`
            <img src="kepek/DSC7681.jpeg" alt=""></img>`)
          }
    }
