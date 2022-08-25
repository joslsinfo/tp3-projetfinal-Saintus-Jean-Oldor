const form = document.getElementById("form");
const user = document.getElementById("userInput");
const password = document.getElementById("passwordInput");
const form2 = document.getElementById("form2");
const user2 = document.getElementById("user2Input");
const password2 = document.getElementById("password2Input");
const passwordConfirmation = document.getElementById("passwordConfirmationInput");


const displayform = _("displayForm");
const forlogin = _("forLogin");
const loginForm = _("loginForm");
const forRegister = _("forRegister");
const registerForm = _("registerForm");
const formContainer = _("formContainer");
displayform.addEventListener('click', showForm);





// console.log(displayForm);

forlogin.addEventListener('click', () => {
  forlogin.classList.add('active');
  forRegister.classList.remove('active');
  if(loginForm.classList.contains('toggleForm')) {
    formContainer.style.transform = 'translate(0%)';
    formContainer.style.transition = 'transform 0.5s';
    registerForm.classList.add('toggleForm');
    loginForm.classList.remove('toggleForm');

  }

})

forRegister.addEventListener('click', () => {
  forlogin.classList.remove('active');
  forRegister.classList.add('active');
  if(registerForm.classList.contains('toggleForm')) {
    formContainer.style.transform = 'translate(-100%)';
    formContainer.style.transition = 'transform 0.5s';
    registerForm.classList.remove('toggleForm');
    loginForm.classList.add('toggleForm');

  }
})

function _(e){
  return document.getElementById(e);
}

function showForm() {
  document.querySelector('.form-wrapper .card').classList.toggle('show');
}







const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".errorMessage");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".errorMessage");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validateForm1 = () => {
  let noError1 = true;
 
  const userValue = user.value.trim();
  const passwordValue = password.value.trim();
 

  if (userValue === "") {
    setError(user, "User is required");
  
    noError1 = false;
  } else {
    setSuccess(user);
  
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
    noError1 = false;
    // e.preventDefault();
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 charaters.");
    // e.preventDefault();
    return false;
    
  } else {
    setSuccess(password);
    
  }

  
  return noError1;

 
};


const validateForm2 = () => {
  let noError2 = true;
   
  const user2Value = user2.value.trim();
  const password2Value = password2.value.trim();
  const passwordConfirmationValue = passwordConfirmation.value.trim();


  if (user2Value === "") {
    setError(user2, "User is required");
  
    noError2 = false;
  } else {
    setSuccess(user2);
  
  }

  if (password2Value === "") {
    setError(password2, "Password is required");
    noError2 = false;
    // e.preventDefault();
  } else if (password2Value.length < 8) {
    setError(password2, "Password must be at least 8 charaters.");
    // e.preventDefault();
    return false;
    
  } else {
    setSuccess(password2);
    
  }

  if (passwordConfirmationValue === "") {
    setError(passwordConfirmation, "Password confirmation is required");
    noError2 = false;
  } else if (password2Value != passwordConfirmationValue ) {
    setError(passwordConfirmation, "Password must be at least 8 charaters.");
    return false;
  } else {
    setSuccess(passwordConfirmation);
  }


  return noError2;

 
};