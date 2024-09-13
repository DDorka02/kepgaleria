import Jatekter from "./Jatekter.js";

export default class Kartya {
    #lista=[]
    #taroloELEM
    #szuloELEM
    constructor(lista,taroloELEM){
        this.#lista=lista
        this.#taroloELEM=taroloELEM
        this.#szuloELEM=szuloELEM
        this.#taroloELEM.empty()
        this.kepKiir()
    }

    kepKiir(){
        
        this.#szuloELEM.append(`
            <img src="kepek/DSC7681.jpeg" alt=""></img>`)
          }
    }
