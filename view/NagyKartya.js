import { KEPEK } from "../model/adatok.js";

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
        this.jobbELEM.on("click",()=>{ this.#esemenyTrigger("jobb")})
    
        this.balELEM=$(".bal")
        this.balELEM.on("click",()=>{ this.#esemenyTrigger("bal")})
    }

    kepKiir(){
        this.#taroloELEM.append(`
            <button class="bal col-1">BAL</button>
          <div class="card  col-10" ">
                <div class="card-body">           
                     <img src="${this.#source.kep}" alt="${this.#source.cim}"class="card-img-top">
               </div>
          </div>
          <button class="jobb col-1">JOBB</button>  
            `)    
        }

    #esemenyTrigger(esemenynev){
        const e = new CustomEvent(esemenynev);
        window.dispatchEvent(e);
          }
    }
