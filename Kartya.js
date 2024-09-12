export default class Kartya {
    //adattagok
    #obj={}
    #szuloELEM;
    //construktor
    constructor(obj,szuloELEM){
        this.#obj=obj
        this.#szuloELEM=szuloELEM
        this.kepKiir()

    }
    //tagfüggvény
    kepKiir() {
        this.#szuloELEM.append(`<img src="kepek/virag.jpeg" alt=""></img>`)
        }
    }