const password = document.querySelector('#password');
//# gets the object by id
const username = document.querySelector('#username');
function openExternalLink(event){
  window.location.href = "https://cdn.pixabay.com/photo/2022/08/21/15/10/welcome-back-7401532_1280.png"
}


username.addEventListener('mouseenter', () => {
  //tooltipText.style.display = 'block';
  console.log("You have entered the username");
});

//password.addEventListener('mouseenter',() => {
  //Alert to display a message for mouseenter
 // console.log("Don't forget your password");

password.addEventListener('input',() => {
  console.log(`Your password is ${password.value}`)
});
