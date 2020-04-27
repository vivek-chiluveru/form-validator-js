var form = document.getElementById("form");
var userName = document.getElementById("userName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkRequired(input, min, max) {
  if (input.value.length < min) {
    showError(input, input.id + " should be minimum " + min + " characters");
  } else if (input.value.length > max) {
    showError(input, input.id + " should be maximum " + max + " characters");
  } else {
    showSuccess(input);
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired(userName, 3, 15);
  checkRequired(password, 6, 20);
  if (password.value === password2.value) {
    showSuccess(password2);
  } else {
    showError(password2, "password doesnt match");
  }
  function ValidEmail(input) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, "Email is invalid");
    }
  }
  ValidEmail(email);
});
