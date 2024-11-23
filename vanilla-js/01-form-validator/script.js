const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPw = document.getElementById('confirm-pw');

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isVaildEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(String(email).toLowerCase());
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  !username.value ? showError(username, 'Username is required') : showSuccess(username);
  !email.value
    ? showError(email, 'Email is required')
    : !isVaildEmail(email.value)
      ? showError(email, 'Email is not vaild')
      : showSuccess(email);
  !password.value ? showError(password, 'Password is required') : showSuccess(password);
  !confirmPw.value ? showError(confirmPw, 'Confirm password is required') : showSuccess(confirmPw);
});
