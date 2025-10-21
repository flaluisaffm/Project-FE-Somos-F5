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
    li.setAttribute("data-text", toDoText);
    if(isCompleted) li.classList.add("completed");
    

}



