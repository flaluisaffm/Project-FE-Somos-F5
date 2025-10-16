//the id is the theme selector
const selectorButton = document.getElementById("theme-selector");
const elementBody = document.body;

//When I'm on the dark mode, it changes to light mode
//Prove that the class dark-mode exists
function changeMode(){
    const isOnDarkMode = elementBody.classList.contains("dark-mode");
    selectorButton.textContent = isOnDarkMode ? "Change it to light mode ☀️" : "chnage it to dark mode 🌙"
    // ? it is a boolean for if else statement, if is on dark mode, switch it to light mode and vice and versa
    //&#9728 a sun icon    
} 

function changeTheme(){
    elementBody.classList.toggle("dark-mode");
    //toggle pass from on mode to another
    changeMode();
}
selectorButton.addEventListener("click", changeMode);
changeMode();

