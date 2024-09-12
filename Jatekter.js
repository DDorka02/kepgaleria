export default class Jatekter {
    //adattagok
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
        this.#szuloELEM.append(`<div class="card col-lg-3 col-md-4 col-sm-6">
          <div class="card-body">
          <h3 class="card-title">${this.#obj.kep}</h3>
          <p>név: ${this.#obj.cim}</p>
          <p>leírás: ${this.#obj.leiras}</p>
          </div>
          </div>`)
        }
        }
       
