const loginInput=document.querySelector("#login-form input");
const loginForm=document.querySelector("#login-form");
const h1Title=document.querySelector("#greeting");
const modiName=document.querySelector("#greetingDiv button");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";

//로그인 되어 있는지 체크
//local Storage도 같이 체크한다.
const username=(function username(name){
    let username=name?name:"";
    const init=(function(){
        const lsName=localStorage.getItem(USERNAME_KEY);
        if(lsName!=null){
            username=lsName;
        }
    })();
    return {
        setName:function(name) {
            username=name;
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
        }
    }
})();

//새로고침 이후 페이지 init
const initialLoaded=(function pageInit(){
    username();
    if(!username.isLogin){
        paintLogin();
    }
    else{
        paintLogin(username.getName());
        
    }
})();


function onLoginSubmit(events){
    events.preventDefault();
    const username=loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,username);
    paintGreeting(username);
}

function paintGreeting(username){
    const date=new Date();
    const hour=date.getTime();
    let greetingMsg="";
    if(hour<11) {greetingMsg="Good morning";}
    else if(hour<18) {greetingMsg="Good afternoon";}
    else greetingMsg="Good evening";

    h1Title.innerText=`${greetingMsg} ${username}`;
    h1Title.classList.remove(HIDDEN_CLASSNAME);
}

function paintLogin(){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit",onLoginSubmit); 
}

