import { kepekLISTA } from "./adatok.js";
import Jatekter from "./Jatekter.js";
import Kartya from "./Kartya.js";

const TARTALOM = $(".galeria");
const NAGYKEP = $(".nagykep")

new Kartya(kepekLISTA,NAGYKEP)

  kepekLISTA.forEach((elem)=>{
    console.log(elem)
    new Jatekter(elem,TARTALOM)
  })


    
    const nagykepIMGELEM = $(".nagykep img")
  
    const nagykepIMGELEM2 = $(".nagykep")[0]

    const kisKEPELEMEK =$(".kep");
    
    for (let index = 0; index < kisKEPELEMEK.length; index++) {
        kisKEPELEMEK[index].on("click",function (event){
            console.log(event.target.src)
            aktIndex=index;
            nagykepIMGELEM.attr=event.target.src
            nagykepIMGELEM2.removeClass("rejtett")
        });
    
    }

  let aktIndex=0;
    const jobbgomb = $(".jobb")
    jobbgomb.on("click",jobbra)
    /*const balgomb = $(".bal")
    balgomb.on("click", balra)
*/

    function jobbra() {
        aktIndex++;
        if (aktIndex>=kepekLISTA.length) {
            aktIndex=0;           
        }
        console.log(aktIndex)
        console.log(kepekLISTA[aktIndex].kep)
    }

    /*function balra() {
        aktIndex--;
        if (aktIndex<=kepekLISTA.length) {
            aktIndex=-1;           
        }
        console.log(aktIndex)
        console.log(kepekLISTA[aktIndex].kep)

    }*/
    