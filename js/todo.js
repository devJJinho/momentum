const todoForm=document.getElementById("todo-form");
const todoList=document.getElementById("todo-list");
const todoInput=document.querySelector("#todo-form input");
const todoDiv=document.querySelector("#todoDiv");

import {CONSTANT} from "./constant.js"

todoForm.addEventListener("submit",handleToDoSubmit);

const todoArray=function todoArray(){
    let todos=[];
    return {
        setArray:function(array){
            todos=array;
            this.syncArray();
        },
        addElement:function(element){
            todos.push(element);
            this.syncArray();
        },
        initArray:function(){
            const get=localStorage.getItem(CONSTANT.TODOS_KEY);
            if(get!==null){
                const parseArray=JSON.parse(get);
                todos=parseArray;
            }
        },
        syncArray:function(){
            localStorage.setItem(CONSTANT.TODOS_KEY,JSON.stringify(todos));
        },
        getArray:function(){
            return todos;
        },
        //수정 필요
        delElement:function(index){
            todos.splice(index,1);
            this.syncArray();
        }
    }
}();

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=todoInput.value;
    todoInput.value="";
    paintToDo(newTodo);
    todoArray.addElement(newTodo);
};

function paintTodoDiv(){
    todoDiv.classList.remove(CONSTANT.HIDDEN_CLASSNAME);
}
//삭제를 어떻게 구현해야될지?
const paintToDo=(function(){
    let cnt=0;
    return (newTodo)=> {
    const listItem=document.createElement("li");
    const span=document.createElement("span");
    const btn=document.createElement("button");
    span.id=cnt;
    cnt=cnt+1;
    span.innerText=newTodo;
    btn.innerText="❌";
    btn.addEventListener("click",deleteToDo);
    listItem.appendChild(btn);
    listItem.appendChild(span);
    todoList.appendChild(listItem);
    }
})();

function deleteToDo(event){
    /*
    Array 내장 함수로 del을 구현하면, 값이 같은 todo list 중 하나를 삭제하면 순서가 뒤죽박죽이 된다.
    때문에 localStorage와 todos[]의 배열이 항상 같다는 가정 하에 특정 순서의 요소를 삭제하는 것으로 구현함.
    */
    const deleteObject=event.target.parentNode;
    const id=deleteObject.querySelector("span").id;
    const spanArray=deleteObject.parentNode.querySelectorAll("span");
    const index=(function(){
        let cnt=0;
        spanArray.forEach((value)=>{
            if(value.id!=id){cnt=cnt+1
            }
            else{return false}
        });
        return cnt;
    })();
    todoArray.delElement(index);
    deleteObject.remove();
};

export function todoInit(){
    paintTodoDiv();
    todoArray.initArray();
    const todos=todoArray.getArray();
    todos.forEach(paintToDo);
};

export function hideTodo(){
    todoDiv.classList.add(CONSTANT.HIDDEN_CLASSNAME);
};



