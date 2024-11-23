const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPw = document.getElementById('confirm-pw');

const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
};

const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
};

const checkEmail = (input) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailPattern.test(String(input.value).toLowerCase())) showSuccess(input);
  else showError(input, 'Email is not valid');
};

const checkRequired = (inputArr) => {
  inputArr.forEach(function (input) {
    if (!input.value.trim()) showError(input, `${getFieldName(input)} is required`);
    else showSuccess(input);
  });
};

const checkLength = (input, min, max) => {
  if (input.value.length < min) showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  else if (input.value.length > max) showError(input, `${getFieldName(input)} must be less than ${max} characters`);
  else showSuccess(input);
};

const checkPasswordMatch = (input1, input2) => {
  if (input1.value !== input2.value) showError(input2, 'Passwords do not match');
};

const getFieldName = (input) => {
  if (input.id === 'confirm-pw') return 'Confirm password';
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([username, email, password, confirmPw]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordMatch(password, confirmPw);
});
