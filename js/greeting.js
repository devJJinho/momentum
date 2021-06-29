const loginInput=document.querySelector("#login-form input");
const loginForm=document.querySelector("#login-form");
const h1Title=document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";

function onLoginSubmit(events){
    events.preventDefault();
    const username=loginInput.value;
    loginForm.classList.add("hidden");
    localStorage.setItem(USERNAME_KEY,username);
    paintGreeting(username);
}

function paintGreeting(username){
    h1Title.innerText=`Hello ${username}`;
    h1Title.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername=localStorage.getItem(USERNAME_KEY);

if(savedUsername===null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit",onLoginSubmit); 
}
else{
    paintGreeting(savedUsername);
}