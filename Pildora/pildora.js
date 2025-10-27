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

            
const form = document.getElementById('form');
if (!form) {
  console.error('Form element #login-form not found.');
}

form.addEventListener('submit', (e) => {
  // If the form is invalid, the submit event DOES NOT fire.
  // So this handler only runs when the form is valid.

  e.preventDefault(); // stop real POST to /login

  console.log('Form valid. Redirecting...');
  // Choose ONE of these:
  // location.href = 'http://127.0.0.1:5500/Menu%20Navigation/index.html';
  window.location.assign('http://127.0.0.1:5500/Menu%20Navigation/index.html');
});






