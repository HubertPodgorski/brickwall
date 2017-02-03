// import { data } from "./helper";

const button = document.getElementsByClassName("col-1");
const button2 = document.querySelectorAll(".col-1");
const attr = document.querySelector("[test]");

const onInit = function(){
    console.log(button, "button");
    console.log(typeof(button));
    
    console.log(button2, "button2");
    console.log(typeof(button2));

    console.log(attr.getAttribute("test"), "atrybut test");
    console.log(typeof(attr));
};

onInit();