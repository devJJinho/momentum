const todoForm=document.getElementById("todo-form");
const todoList=document.getElementById("todo-list");
const todoInput=document.querySelector("#todo-form input");

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=todoInput.value;
    todoInput.value="";
    paintToDo(newTodo);
}

function paintToDo(newTodo){
    const listItem=document.createElement("li");
    const span=document.createElement("span");
    const btn=document.createElement("button");
    span.innerText=newTodo;
    btn.innerText="❌";
    btn.addEventListener("click",deleteToDo);
    listItem.appendChild(btn);
    listItem.appendChild(span);
    todoList.appendChild(listItem);
}

function deleteToDo(event){
    console.log(event.target.parentNode.innerText);
}

todoForm.addEventListener("submit",handleToDoSubmit);

