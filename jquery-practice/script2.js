let inputEmail = $('#email-output').html();
let inputPassword = $('#password-output').val();

let getEmail = localStorage.getItem('email', inputEmail);
let getPassword = localStorage.getItem('password', inputPassword);

successEmail = getEmail;
successPassword = getPassword;

console.log(successEmail);
console.log(successPassword);
document.querySelector('#email-output').textContent = getEmail;
document.querySelector('#password-output').textContent = getPassword;
