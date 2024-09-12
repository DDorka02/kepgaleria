import { KEPEK } from "./adatok.js";
import Kartya from "./Kartya.js";

const TARTALOM = $(".galeria");

new Kartya(KEPEK, TARTALOM);

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
for (let index = 0; index < jobbgomb; index++) {
  jobbgomb[index].on("click", function() {
    if (aktIndex < KEPEK.length -1 ) {
      aktIndex++;
    } else {
      aktIndex = 0;
    }
    console.log(aktIndex)
    console.log(KEPEK[aktIndex].kep)
    nagykepIMG.attr = KEPEK[aktIndex].kep;
  });
}

const balgomb = $(".bal")
        for (let index = 0; index < balgomb; index++) {
            balgomb[index].on("click", function() {
              if (aktIndex > 0 ) {
                aktIndex--;
              } else {
                aktIndex = KEPEK.length -1;
              }
              console.log(aktIndex)
              console.log(KEPEK[aktIndex].kep)
              nagykepIMG.attr = KEPEK[aktIndex].kep;

            });}
