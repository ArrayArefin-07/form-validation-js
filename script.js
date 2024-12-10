var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");

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
}

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
