//# gets the object by id
const username = document.querySelector('#username');
username.addEventListener('mouseenter', () => {
  //tooltipText.style.display = 'block';
  console.log("You have entered the username");
});
//password.addEventListener('mouseenter',() => {
  //Alert to display a message for mouseenter
 // console.log("Don't forget your password");
const password = document.querySelector('#password');
password.addEventListener('input',() => {
  console.log(`Your password is ${password.value}`)
});

//function that will open an img when button in clicked
function openExternalLink(event){
  window.location.href = "https://cdn.pixabay.com/photo/2020/03/31/19/20/dog-4988985_1280.jpg"
}

