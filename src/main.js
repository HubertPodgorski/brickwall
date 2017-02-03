// import { data } from "./helper";

const container = document.querySelector(".container");



const onInit = function(){
    container.appendChild(document.createTextNode("Kontener z obiektem: "));
    container.appendChild(document.createTextNode("data.element"));
};

onInit();