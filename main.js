import { KEPEK } from "./adatok.js";
import Jatekter from "./view/Jatekter.js";

import NagyKartya from "./view/NagyKartya.js";

const TARTALOM = $(".galeria");
const kivElem = $(".belsokep")
let index=0

new NagyKartya(2, kivElem);

new Jatekter(KEPEK,TARTALOM)


  $(window).on("belsokep",(event)=>{
  console.log(event.detail)
  kivElem.empty()
  new NagyKartya(event.detail,kivElem)
})

$(window).on("jobb",(event)=>{  
   index++;
   if (index===LISTA.length) {index=0}
   kivElem.empty()
   new NagyKartya(LISTA[index],kivElem)
})
$(window).on("bal",(event)=>{  
   index--;
   if (index<0) {index=LISTA.length-1}
   kivElem.empty()
   new NagyKartya(LISTA[index],kivElem)
})

