import Kartya from "./Kartya.js"

export default class Jatekter{
    #lista=[]
    #taroloELEM
    constructor(lista,taroloELEM){
        this.#lista=lista
        this.#taroloELEM=taroloELEM
        this.#taroloELEM.empty
        this.kepekKiir()
    }

    kepekKiir(){
        this.#lista.forEach((elem)=>{
            console.log(elem)
            new Kartya(elem,this.#taroloELEM)
          })
    }
}