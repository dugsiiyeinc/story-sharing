const email = document.querySelector('#email')
const password = document.querySelector('#password')
const small = document.querySelector('small')
const btn = document.querySelector('.btn')


function showError(input, message) {
    const inputControl = input.parentElement;
    inputControl.classList = 'sections-form error';
    const small = inputControl.querySelector('small');
    small.style.visibility = 'visible'
    small.innerText = message;
  }
  
  function showSuccess(input) {
    const inputControl = input.parentElement;
    inputControl.classList = 'sections-form success';
    const small = inputControl.querySelector('small');
    small.innerText = '';
  }

function checkInputs(){
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
 
    let isValid = true;

    if (emailValue === '') {
        showError(email, 'Email is required');
        isValid = false
    } else{
        showSuccess(email)
    }
    
    if(passwordValue === ''){
        showError(password, 'password is required');
        isValid = false
    }else{
        showSuccess(password)
    }
    if(isValid){

    }
}


//section localstorage
function getDataLocalStorage() {
    const checkUsers = localStorage.getItem('users');
    if (checkUsers) {
      return JSON.parse(checkUsers);
    } else {
      return [];
    }
  }

function checkLogin(emailInput , passwordInput){
    const checkData = getDataLocalStorage()
     const userInfo = checkData.find((user)=> user.email === emailInput && user.password === passwordInput)

     console.log("current user", userInfo)
    if(!userInfo){
        alert("incorrect user or passwrod")
        console.log('not data');
    }
    else{
        localStorage.setItem('currentUser', JSON.stringify(userInfo))
    //    alert('not same')

window.location.href="/home.html"
        
    }
}


btn.addEventListener('click', function(event){

checkInputs()

checkLogin(email.value , password.value)
})
















