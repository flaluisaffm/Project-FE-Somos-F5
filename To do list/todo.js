//SELECTORS to fetch the elements of DOM

//const { createElement } = require("react");

//html --> list-input
const listInput = document.getElementById("list-input");
//html --> addList
const addButton = document.getElementById("addList");
//html --> <ul> toDoList
const listToDoUl = document.getElementById("toDoList");

//Relevant Events
//DOMContentLoaded load everything from html
document.addEventListener("DOMContentLoaded", loadLists); 
addButton.addEventListener("click", addNewtask);

//Functions - logic of the app
//before I had functin addNewList
function addNewtask(){
    //value means when something input is add in the field
    const toDoText = listInput.value.trim();
    if(toDoText){
        createElement(toDoText);
        saveToDo(toDoText);
        listInput.value = "";
    }

}

//Main function to create elements <li> and its buttons
//isCompleted has default value as False, otherwise all the to do list will be created as completed
function createElement(toDoText, isCompleted = false){
    const li = document.createElement("li");
    li.className="task-item";
    //created data-text to identify as data
    li.setAttribute("data-text", toDoText);
    if(isCompleted) li.classList.add("completed");

    li.innerHTML = 
       `<span>${toDoText}</span>
        <button class="completed-btn">✓</button>
        <button class="delete-btn">🗑️</button>`;
    li.querySelector(".completed-btn").addEventListener("click", completeList);
    li.querySelector(".delete-btn").addEventListener("click", deleteList);

    //creating the son li and agregating to the list
    listToDoUl.appendChild(li);
}

function completeList(event){
    const li = event.target.parentElement; // <li> is the father of the button
    li.classList.toggle("completed");

    //Atualizar o estado da to do list
    refreshlistToDoUl(li.getAttribute("data-text"));
}
function deleteList(event){
    const li = event.target.parentElement; 
    const listText = li.getAttribute("data-text");

    listToDoUl.removeChild(li);
    deleteTaskFromStorage(listText);
}
const obtainList = () => JSON.parse(localStorage.getItem('tasks')) || [];

function loadLists(){
    obtainList().forEach(task => createElement(task.text, task.completed));

}

function saveToDo(listText){
    const tasks = obtainList();
    tasks.push({text:listText, completed:false});
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function refreshlistToDoUl(listText){
    let tasks = obtainList();

    tasks = tasks.map(task =>
        task.text === listText
        ? { ...task, completed:!task.completed} //change its state
        : task //Mantain the remaining tasks the same
    );
    localStorage.setItem('tasks', JSON.stringify(tasks));

}
function deleteTaskFromStorage(listText){
    //we used 'filter'to create a new array without the deleted task
    const tasks = obtainList().filter(task => task.text !== listText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}