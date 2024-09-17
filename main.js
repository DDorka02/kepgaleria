import { KEPEK } from "./adatok.js";
import Jatekter from "./Jatekter.js";

import NagyKartya from "./NagyKartya.js";

const TARTALOM = $(".galeria");
const nagyKEP = $(".belsokep")

new NagyKartya(2, nagyKEP);

new Jatekter(KEPEK,TARTALOM)

$(window).on("galeria",(event)=>{
  console.log(event.detail)
  nagyKEP.empty()
  new NagyKartya(event.detail,nagyKEP)
})

let aktIndex = 0;

const jobbgomb = $(".jobb");
for (let index = 0; index < jobbgomb.length; index++) {
  jobbgomb.on("click", function() {
    if (aktIndex < KEPEK.length - 1 ) {
      aktIndex++;
      if (index===LISTA.length){index=0}
    } else {
      aktIndex = 0;
    }
    new NagyKartya(aktIndex,nagyKEP)
  });
}

const balgomb = $(".bal")
for (let index = 0; index < balgomb.length; index++) {
  balgomb.on("click", function() {
    if (aktIndex > 0 ) {
        aktIndex--;
    } else {
        aktIndex = KEPEK.length -1;
    }
    new NagyKartya(aktIndex,nagyKEP)
 });
}
