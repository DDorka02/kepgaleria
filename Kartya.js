export default class Kartya {
    #obj={}
    #szuloELEM;
    //construktor
    constructor(obj,szuloELEM){
        this.#obj=obj
        this.#szuloELEM=szuloELEM
        this.kepekKiir()
    }
    //tagfüggvény
    kepekKiir() {
        this.#szuloELEM.append(`<img src="kepek/virag.jpg" alt=""></img>         `)
        }

    }