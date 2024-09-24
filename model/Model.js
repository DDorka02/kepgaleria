import { KEPEK } from "./adatok"

export default class Modell{
#lista=[]
#index
    constructor(lista){
        this.#lista=lista
        this.#index=0
    }

    getIndex(){
        return this.#index
    }

    setIndex(index){
        this.#index=index
    }

    letetBAl(){
        this.#index--;
        if (this.#index< 0){
            this.#index = this.#lista.length -1;
        }
        return this.#index;
    }

    letetJObb(){
        this.#index++;
        if (this.#index === this.#lista.length ){
            this.#index = 0;
        }
        return this.#index;
    }


}