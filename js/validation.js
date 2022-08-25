const form = document.getElementById("form");
const nom = document.getElementById("nomInput");
const prenom = document.getElementById("prenomInput");
const phone = document.getElementById("phoneInput");
const courriel = document.getElementById("courrielInput");
const password = document.getElementById("passwordInput");
const passwordConfirmation = document.getElementById("passwordConfirmationInput");
const messageText = document.getElementById("messageTextInput");
const infoLettre = document.getElementById("infoLettreInput");




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

// Fonction retournant true si le format d'une adresse courriel est valide
const isValidEmail = (courrielInput) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(courrielInput).toLowerCase());
};


const isValidPhone = (phoneInput) => {
  const rep = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  // const rep = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;  : format : + XX-XXXX-XXXX
  return rep.test(phoneInput);
};

const validateForm = () => {
      let noError = true;
      // const valid = false;
      const nomValue = nom.value.trim();
      const prenomValue = prenom.value.trim();
      const phoneValue = phone.value.trim();
      const courrielValue = courriel.value.trim();
      const passwordValue = password.value.trim();
      const passwordConfirmationValue = passwordConfirmation.value.trim();
      const messageTextValue = messageText.value.trim();
      const infoLettreValue = infoLettre;

    
      if (nomValue === "") {
        setError(nom, "Lastname is required");
        noError = false;
      } else {
        setSuccess(nom);
      }

      if (prenomValue === "") {
        setError(prenom, "Firstname is required");
        noError = false;
      } else {
        setSuccess(prenom);
      }


      if (phoneValue === "") {
        setError(phone, "Email is required");
        noError = false;
      } else if (!isValidPhone(phoneValue)) {
        setError(phone, "Provide a valid phone number like this format: XXX-XXX-XXXX");
        noError = false;
      } else {
        setSuccess(phone);
      }

      if (courrielValue === "") {
        setError(courriel, "Email is required");
        noError = false;
      } else if (!isValidEmail(courrielValue)) {
        setError(courriel, "Provide a valid email address");
        noError = false;
      } else {
        setSuccess(courriel);
      }

      if (passwordValue === "") {
        setError(password, "Password is required");
        noError = false;
      } else if (passwordValue.length < 8) {
        setError(password, "Password must be at least 8 charaters.");
        return false;
      } else {
        setSuccess(password);
      }

      if (passwordConfirmationValue === "") {
        setError(passwordConfirmation, "Password confirmation is required");
        noError = false;
      } else if (passwordValue != passwordConfirmationValue ) {
        setError(passwordConfirmation, "Password must be at least 8 charaters.");
        return false;
      } else {
        setSuccess(passwordConfirmation);
      }

      if (messageTextValue === "") {
        setError(messageText, "Message is required");
        noError = false;
      } else {
        setSuccess(messageText);
      }

      // Cette partie quèon doit revoir qui ne fonctionne pas bien.
    if(infoLettreValue.checked) {
      // valid = true;

      setSuccess(infoLettre);
      // return true;
    } else{
      setError(infoLettre, "Newsletter is required");
        noError = false;
        // return false;
    }
   

      return noError;
};

