const clock=document.querySelector("h2#clock");

import {CONSTANT} from "./constant.js";

function setClock(){
    const date=new Date();
    const hour=String(date.getHours()).padStart(2,"0");
    const min=String(date.getMinutes()).padStart(2,"0");
    const sec=String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hour} : ${min} : ${sec}`;
};

export function paintClock(){
    clock.classList.remove(CONSTANT.HIDDEN_CLASSNAME)
    setClock();
    setInterval(setClock,1000);
};

export function hideClock(){
    clock.classList.add(CONSTANT.HIDDEN_CLASSNAME);
}
