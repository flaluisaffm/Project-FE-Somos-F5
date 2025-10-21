//SELECTORS to fetch the elements of DOM

const { createElement } = require("react");

//html --> list-input
const listInput = document.getElementById("list-input");
//html --> addList
const addButton = document.getElementById("addList");
//html --> <ul> toDoList
const listToDo = document.getElementById("toDoList");

//Relevant Events
//DOMContentLoaded load everything from html
document.addEventListener("DOMContentLoaded", loadLists); 
addButton.addEventListener("click", addNewList);

//Functions - logic of the app
function addNewList(){
    //value means when something input is add in the field
    const toDoText = listInput.value.trim();
    if(toDoText){
        createElementToDo(toDoText);
        saveToDo(toDoText);
        listInput.value = "";
    }

}

//Main function to create elements <li> and its buttons
//isCompleted has default value as False, otherwise all the to do list will be created as completed
function createElementToDoList(toDoText, isCompleted = false){
    const li = document.createElement("li");
    li.className="task-item";
    //created data-text to identify as data
    li.setAttribute("data-text", toDoText);
    if(isCompleted) li.classList.add("completed");

    li.innerHTML = 
       `<span>${toDoText}</span>
        <button class="completed-btn">✓</button>
        <button class="delete-btn"></button>`;
    li.querySelector("completed-btn").addEventListener("click", completeList);
    li.querySelector("delete-btn").addEventListener("click", deleteList);

    //creating the son li and agregating to the list
    listToDo.appendChild(li);
}

function completeToDo(event){
    const li = event.target.parentElement; // <li> is the father of the button
    li.classList.toggle("completed");

    //Atualizar o estado da to do list
    refreshToDoList(li.getAtribute("data-text"));
}
function eliminateList(event){
    const li = event.target.parentElement; 
    const listText = li.getAtribute("data-text");

    listToDo.removeChild(li);
    deleteList(listText);
}
const obtainList =  = () => JSON.parse(localStorage.getItem('tasks')) || [];

function loadLists(){
    obtainList().forEach(task => createElementToDoList(task.text, task.completed));

}

function saveToDo(listText){
    const tasks = obtainList();
    tasks.push({text:listText, completed:false});
    localStorage.getItem("tasks", JSON.stringify(tasks));
}

function refreshToDoList(listText){
    let tasks = obtainList();
    
}




