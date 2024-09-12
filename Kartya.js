import Jatekter from "./Jatekter.js";

export default class Kartya {
    #lista=[]
    #taroloELEM
    constructor(lista,taroloELEM){
        this.#lista=lista
        this.#taroloELEM=taroloELEM
        this.#taroloELEM.empty()
        this.kepKiir()
    }

    kepKiir(){
        this.#lista.forEach((elem)=>{
            new Jatekter(elem,this.#taroloELEM)
          })
    }
}