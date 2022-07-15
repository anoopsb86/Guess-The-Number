$('#login-btn').click(function (e) {
  //   e.preventDefault();

  let enteredEmail = document.querySelector('#email').value;
  let enteredPassword = document.querySelector('#password').value;

  if (!enteredEmail || !enteredPassword) {
    alert('Please enter all fields');
  } else {
    $('form').attr('action', 'successpage.html');
    const emailInput = $('#email').val();
    localStorage.setItem('email', emailInput);

    console.log(emailInput);

    const passwordInput = $('#password').val();
    localStorage.setItem('password', passwordInput);
    console.log(passwordInput);
  }
});
