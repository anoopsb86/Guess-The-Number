$('#login-btn').click(function (e) {
  let enteredEmail = $('#email').val();
  let enteredPassword = $('#password').val();

  if (!enteredEmail || !enteredPassword) {
    alert('Please enter all fields');
  } else {
    $('form').attr('action', 'successpage.html');
    const emailInput = $('#email').val();
    localStorage.setItem('email', emailInput);

    const passwordInput = $('#password').val();
    localStorage.setItem('password', passwordInput);
  }
});

successPageLoad = function () {
  const inputEmail = $('#email-output').html();
  const inputPassword = $('#password-output').val();

  const getEmail = localStorage.getItem('email', inputEmail);
  const getPassword = localStorage.getItem('password', inputPassword);

  $('#email-output').html(getEmail);
  $('#password-output').html(getPassword);
};
