let isPasswordValid = false;
let isTrueLength, hasUpperCase, hasLowerCase, hasNum, format, hasSpecialChar;

const handleChangeEmail = () => {
  const emailInput = document.getElementsByClassName("login-input-email")[0];
  if (emailInput.checkValidity() == false)
    emailInput.style.borderBottom = "2px solid red";
  else emailInput.style.borderBottom = " 2px solid #b0b3b9";
};

const handleChangePassword = () => {
  console.log("handleChangePassword:");
  const passwordInput = document.getElementsByClassName(
    "login-input-password"
  )[0];

  isTrueLength = passwordInput.value.length >= 6;
  hasUpperCase = /[A-Z]/.test(passwordInput.value);
  hasLowerCase = /[a-z]/.test(passwordInput.value);
  hasNum = /[1-9]/.test(passwordInput.value);

  format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  hasSpecialChar = format.test(passwordInput.value);

  if (isTrueLength && hasUpperCase && hasLowerCase && hasNum && hasSpecialChar)
    isPasswordValid = true;

  if (isPasswordValid == false)
    passwordInput.style.borderBottom = "2px solid red";
  else passwordInput.style.borderBottom = " 2px solid #b0b3b9";
};

const handelSubmitClick = () => {
  if (isPasswordValid == false)
    alert(
      `ERORR: the password is incorrect!!${
        !isTrueLength ? "\nThe length mast be at lest 6 chars" : ""
      }${!hasUpperCase ? "\nThe password mast includes upper case" : ""}${
        !hasLowerCase ? "\nThe password mast includes upper case" : ""
      }${!hasNum ? "\nThe password mast includes Numner" : ""}${
        !hasSpecialChar ? "\nThe password mast includes Spacial chars" : ""
      }`
    );
  else {
    alert(`You are in !`);
  }
};
