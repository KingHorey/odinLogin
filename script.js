// const body = document.body
const form = document.getElementById("forms");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const password = document.getElementById("password");
const email = document.getElementById("email");
const password2 = document.getElementById("password2");
const submit = document.querySelector("button");

submit.addEventListener('click', event => {
  console.log("before default");
  event.preventDefault();
  console.log("hello");
  validateInput();
})

function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function setError(input, message) {
  const formControl = input.parentElement;
  console.log(formControl);
  const errorMessage = formControl.querySelector(".error-notification");
  errorMessage.innerText = message;
  formControl.classList.remove('success');
  formControl.classList.add('error');
}

function setSuccess(input) {
  const formControl = input.parentElement;
  const successMessage = formControl.querySelector(".error-notification");
  successMessage.innerText = '';
  formControl.classList.remove('error');
  formControl.classList.add('success');
}


const validateInput = () => {

  const name = fname.value.trim();
  const lastName = lname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (name === '') {
    setError(fname, '⚠ First name is required');
  } else if (name.length < 3) {
    setError(fname, '⚠ First name must be at least 3 characters');
  } else {
    setSuccess(fname);
  }

  if (lastName === '') {
    setError(lname, '⚠ Last name is required')
  } else if (lastName.length < 3) {
    setError(lname, '⚠ Last name must be at least 3 characters');
  } else {
    setSuccess(lname);
  }

  if (emailValue === '') {
    setError(email, '⚠ Email is required')
  } else {
    isValidEmail(emailValue);
  }

  if (passwordValue === '') {
    setError(password, '⚠ Password is required')
  } else if (passwordValue.length < 8)
  {
    setError(password, "⚠ Password should be at least 8 Characters")
  }
    else {
      // regex checher for password validation
    setSuccess(password)
  }
}
