const loginInput=document.querySelector("#login-form input");
const loginForm=document.querySelector("#login-form");

const greetingDiv=document.querySelector("#greetingDiv")
const h1Title=document.querySelector("#greetingDiv h1");
const resetBtn=document.querySelector("#greetingDiv button");

const todoDiv=document.querySelector("#todoDiv");


import { CONSTANT } from "./constant.js";
import {paintLogin} from "./main.js";

function paintGreeting(username){
    resetBtn.addEventListener("click",onResetPage);
    const date=new Date();
    const hour=date.getTime();
    let greetingMsg="";
    if(hour<11) {greetingMsg="Good morning";}
    else if(hour<18) {greetingMsg="Good afternoon";}
    else greetingMsg="Good evening";
    h1Title.innerText=`${greetingMsg} ${username}`;
    h1Title.classList.remove(CONSTANT.HIDDEN_CLASSNAME);
    greetingDiv.classList.remove(CONSTANT.HIDDEN_CLASSNAME);
    greetingDiv.addEventListener('mouseover',()=>{
        resetBtn.classList.remove(CONSTANT.HIDDEN_CLASSNAME);
    });
    greetingDiv.addEventListener('mouseout',()=>{
        resetBtn.classList.add(CONSTANT.HIDDEN_CLASSNAME);
    });
}
function hideGreeting(){
    greetingDiv.classList.add(CONSTANT.HIDDEN_CLASSNAME);
}

function onResetPage(){
    localStorage.clear();
    paintLogin();
}

export {paintGreeting,hideGreeting}