import { todoInit,hideTodo } from './todo.js';
import { paintClock,hideClock } from "./clock.js";
import { paintGreeting,hideGreeting } from "./greeting.js";
import { handleQuotes } from "./quotes.js";
import { paintBg } from "./wallpaper.js";
import { CONSTANT } from "./constant.js";
import {initWeather,hideWeather} from './weather.js';
import '../css/style.css';

const loginInput=document.querySelector("#login-form input");
const loginForm=document.querySelector("#login-form");
// const mainContents=document.querySelector("#centerDiv");

const username=(function username(name){
    let username="";
    return {
        setName:function(name) {
            username=name;
            localStorage.setItem(CONSTANT.USERNAME_KEY,name);
        },
        getName:function(){
            return username;
        },
        isLogin:function(){
            if(username=="") {
                return false;
            }
            else{
                return true;
            }
        },
        syncName:function(){
            const get=localStorage.getItem(CONSTANT.USERNAME_KEY);
            if(get!=null){
                username=get;
            }
        }
    }
})();

window.onload=function(){
    paintBg;
    username.syncName();
    if(username.isLogin()){
        pageInit();
    }
    else{
        paintLogin();
    }
}

function pageInit(){
    paintGreeting(username.getName());
    paintClock();
    handleQuotes.paintQuotes();
    todoInit();
    initWeather();
}

function handleLoginSubmit(events){
    events.preventDefault();
    const inputName=loginInput.value;
    loginInput.value="";
    username.setName(inputName);
    hideLogin();
    pageInit();
}

function paintLogin(){
    hideClock();
    hideGreeting();
    handleQuotes.hideQuotes();
    hideTodo();
    hideWeather();
    // hideContents();

    loginForm.classList.remove(CONSTANT.DISPLAY_HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",handleLoginSubmit); 
}

function hideLogin(){
    loginForm.classList.add(CONSTANT.DISPLAY_HIDDEN_CLASSNAME);
}

// function hideContents(){
//     mainContents.classList.add(CONSTANT.HIDDEN_CLASSNAME);
// }
window.onfocus=()=>{
    if(username.isLogin()){
        initWeather()
    }
};

export {paintLogin}