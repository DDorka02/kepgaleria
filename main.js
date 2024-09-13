import { KEPEK } from "./adatok.js";
import Jatekter from "./Jatekter.js";
import Kartya from "./Kartya.js";

const TARTALOM = $(".galeria");
const nagyKEP = $(".kep")

new Kartya(2, nagyKEP);

KEPEK.forEach((elem)=>{
  console.log(elem)
  new Jatekter(elem,TARTALOM)
})

const nagykepIMG = $(".nagykep img");
const kisKEPELEMEK = $(".kep");

for (let index = 0; index < kisKEPELEMEK.length; index++) {
  kisKEPELEMEK[index].on("click", function (event) {
    console.log(event.target.src);
    aktIndex = index;
    nagykepIMG.attr = event.target.src;
  });
}

let aktIndex = 0;

const jobbgomb = $(".jobb");
for (let index = 0; index < jobbgomb.length; index++) {
  jobbgomb.on("click", function() {
    if (aktIndex < KEPEK.length - 1 ) {
      aktIndex++;
    } else {
      aktIndex = 0;
    }
    nagykepIMG.attr("src", KEPEK[aktIndex].kep);
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
    nagykepIMG.attr("src", KEPEK[aktIndex].kep);
 });
}
