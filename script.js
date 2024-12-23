var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

//functionality for validate Name
function validateName() {
  var name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is Required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write FUll Name Ex:Mobasher Arefin";
    return false;
  }

  nameError.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
  return true;
}

//Functionality for validate Phone Number
function validatePhone() {
  var phone = document.getElementById("contact-phone").value;

  if (phone.length == 0) {
    phoneError.innerHTML = "Phone Number is Required";
    return false;
  }
  if (phone.length !== 11) {
    phoneError.innerHTML = "Phone Number Should be 11 digits";
    return false;
  }
  if (!phone.match(/^[0-9]{11}$/)) {
    phoneError.innerHTML = "Phone Number must be digit";
    return false;
  }

  phoneError.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
  return true;
}

//Functionality for validate Email
function validateEmail() {
  var email = document.getElementById("contact-email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is Required";
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Invalid Email";
    return false;
  }

  emailError.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
  return true
}

// Functionality for Validate text message Area
function validateMessage(){
  var message = document.getElementById("contact-message").value;
  var required = 30;
  var left = required - message.length;

  if (left > 0){
    messageError.innerHTML = `Message should be at least ${required} charecters, ${left} charecters required`;
    return false;
  }

  messageError.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
  return true;
}


// Validate form when press submit button
function validateForm(){
  if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please Fix Error before submit';
    setTimeout(function(){submitError.style.display = 'none';
    }, 3000);
    return false;
  };
}
