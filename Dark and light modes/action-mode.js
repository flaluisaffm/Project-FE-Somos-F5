//the id is the theme selector
const selectorButton = document.getElementById("theme-selector");
const elementBody = document.body;

//When I'm on the dark mode, it changes to light mode
//Prove that the class dark-mode exists
function changeText(){
    const isOnDarkMode = elementBody.classList.contains("dark-mode");
    selectorButton.textContent = isOnDarkMode ? "Change it to light mode &#9728" : "chnage it to dark mode &#127769"
    // ? it is a bolean for if else statement, if is on dark mode, switch it to light mode and vice and versa
    //&#9728 a sun icon
    

} 
