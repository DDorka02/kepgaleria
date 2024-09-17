export default class Kartya {
    //adattagok
    #obj={}
    #szuloELEM;
    //construktor
    constructor(obj,szuloELEM){
        this.#obj=obj
        this.#szuloELEM=szuloELEM
        this.kepElem = $(".galeria:last");
        this.kepekKiir()
        this.esemenyKezelo()
    }
    //tagfüggvény
    kepekKiir() {
        this.#szuloELEM.append(`
          <div class="card col-lg-3 col-md-4 col-sm-6">
          <div class="card-body">
          <h3 class="card-title">${this.#obj.cim}</h3>
          <img src="${this.#obj.kep}" class="img-thumbnail" alt="${this.#obj.cim}"></img>
          <p>leírás:<br> ${this.#obj.leiras}</p>
          </div>
          </div>`)
        }

      esemenyKezelo() {
        this.kepElem.on("click", () => {
          //console.log(this);
          const e = new CustomEvent("galeria", { detail: this.#obj });
          window.dispatchEvent(e);
          });
        }
       
      }