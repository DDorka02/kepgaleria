export default class Jatekter {
    //adattagok
    #obj={}
    #szuloELEM;
    //construktor
    constructor(obj,szuloELEM){
        this.#obj=obj
        this.#szuloELEM=szuloELEM
        this.kepekKiir()
        this.esemenyKezelo()
    }
    //tagfüggvény
    kepekKiir() {
        this.#szuloELEM.append(`
          <div class="card col-lg-3 col-md-4 col-sm-6">
          <div class="card-body">
          <h3 class="card-title">${this.#obj.cim}</h3>
          <img src="${this.#obj.kep}" alt="${this.#obj.cim}"></img>
          <p>leírás:<br> ${this.#obj.leiras}</p>
          </div>
          </div>`)
        }

        esemenyKezelo(){
          this.#szuloELEM.on("click",()=>{
              const e = new CustomEvent("kivalaszt",{detail:this.#obj})
              window.dispatchEvent(e)
            })
          }

        }
       
