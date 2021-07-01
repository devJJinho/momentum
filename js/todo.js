const todoForm=document.getElementById("todo-form");
const todoList=document.getElementById("todo-list");
const todoInput=document.querySelector("#todo-form input");

const TODOS_KEY="todos";

const todoArray=function todoArray(){
    let todos=[];
    return {
        setArray:function(array){
            todos=array;
        },
        addElement:function(element){
            todos.push(element);
        },
        initArray:function(){
            const get=localStorage.getItem(TODOS_KEY);
            if(get!==null){
                const parseArray=JSON.parse(get);
                console.log(parseArray);
                todos=parseArray;
            }
        },
        syncArray:function(){
            localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
        },
        getArray:function(){
            return todos;
        },
        //수정 필요
        deleteArray:function(){
            todos.delete
        }
    }
}();

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=todoInput.value;
    todoInput.value="";
    paintToDo(newTodo);
    todoArray.addElement(newTodo);
    todoArray.syncArray();
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
    const deleteObject=event.target.parentNode;
    console.log(event.target.parentNode);
    deleteObject.remove();

}

const todoInit=(function(){
    const todos=todoArray.getArray();
    console.log(todos);
    todos.forEach(paintToDo);
})();

todoForm.addEventListener("submit",handleToDoSubmit);

