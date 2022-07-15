const inputEmail = $('#email-output').html();
const inputPassword = $('#password-output').val();

const getEmail = localStorage.getItem('email', inputEmail);
const getPassword = localStorage.getItem('password', inputPassword);

document.querySelector('#email-output').textContent = getEmail;
document.querySelector('#password-output').textContent = getPassword;
