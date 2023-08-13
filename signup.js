const form = document.querySelector('#form');
const email = document.querySelector('#email');
const fullName = document.querySelector('#full-name');
const userName = document.querySelector('#username');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#Confirm-password');

function showError(input, message) {
  const inputControl = input.parentElement;
  inputControl.className = 'sections-form error';
  const small = inputControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  const inputControl = input.parentElement;
  inputControl.className = 'sections-form success';
  const small = inputControl.querySelector('small');
  small.innerText = '';
}

function emailValidation(email) {
  const rel = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return rel.test(String(email).toLowerCase());
}


// function registerAccount() {
//   const registeredEmails = JSON.parse(localStorage.getItem('users')) || [];
//   const email = document.querySelector('#email').value.trim();

//   const emailExists = registeredEmails.some((registeredEmail) => registeredEmail === email);

//   if (emailExists) {
   
//     console.log('Email already exists');
//   } 
  
//   else {
   
//     registeredEmails.push(email);
  
//     localStorage.setItem('users', JSON.stringify(registeredEmails));
//     console.log('Account registered successfully');
//   }
// }

function checkValidation() {
  const emailValue = email.value.trim();
  const fullNameValue = fullName.value.trim();
  const userNameValue = userName.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  let isValid = true;

  // halkan waxaan ku hubinayay userka marku register uu sameenayo in la cheecking gareeyo in uu horay u jiray iyo inkale 
  const registeredEmails = JSON.parse(localStorage.getItem('users')) || [];
  const emailExists = registeredEmails.some((registeredEmail) => registeredEmail.email === emailValue);

  // console.log(emailExists)

  // return

  if (emailValue === '') {
    showError(email, 'Email is required');
    isValid = false;
  } else if (!emailValidation(emailValue)) {
    showError(email, 'Invalid email format');
    isValid = false;
  
  } else  if (emailExists) {
    showError(email,'this account already exists');
    isValid = false
  } 
  else {
    showSuccess(email);
  }

  if (userNameValue === '') {
    showError(userName, 'Username is required');
    isValid = false;
  } else {
    showSuccess(userName);
  }

  if (fullNameValue === '') {
    showError(fullName, 'Full name is required');
    isValid = false;
  } else {
    showSuccess(fullName);
  }

  if (passwordValue === '') {
    showError(password, 'Password is required');
    isValid = false;
  } else if (passwordValue.length < 7) {
    showError(password, 'Password must be at least 7 characters');
    isValid = false;
  } else {
    showSuccess(password);
  }

  if (confirmPasswordValue === '') {
    showError(confirmPassword, 'Confirm password is required');
    isValid = false;
  } else if (confirmPasswordValue !== passwordValue) {
    showError(confirmPassword, "Passwords don't match");
    isValid = false;
  } else {
    showSuccess(confirmPassword);
  }

  if (isValid) {
    addDataLocalStorage(emailValue, fullNameValue, userNameValue, passwordValue, confirmPasswordValue);
  }

  
}





function getDataLocalStorage() {
  const checkUsers = localStorage.getItem('users');
  if (checkUsers) {
    return JSON.parse(checkUsers);
  } else {
    return [];
  }
}

function addDataLocalStorage(email, fullName, userName, password) {
  const getData = getDataLocalStorage();
       getData.push({ email: email, fullname: fullName, username: userName, password: password, image: "" , bio: "" });
  localStorage.setItem('users', JSON.stringify(getData));
  window.location.href = 'index.html';
    }
     

form.addEventListener('submit', function (event) {
  event.preventDefault();
  checkValidation();

});











