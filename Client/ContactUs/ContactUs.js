let isPasswordValid = false;
let isTrueLength, hasUpperCase, hasLowerCase, hasNum, format, hasSpecialChar;
let passwordVal;
let issue;
const handleChangeName = () => {
  const nameInput = document.getElementsByClassName("contact-input-name")[0];
  if (nameInput.value == "") nameInput.style.borderBottom = "2px solid red";
  else nameInput.style.borderBottom = " 2px solid #b0b3b9";
};

const handleChangeEmail = () => {
  const emailInput = document.getElementsByClassName("contact-input-email")[0];
  if (emailInput.checkValidity() == false)
    emailInput.style.borderBottom = "2px solid red";
  else emailInput.style.borderBottom = " 2px solid #b0b3b9";
};

const handelDropdwonClick = () => {
  const menu = document.getElementById("dropdown-menu");
  console.log("style of menu:", menu.style.display);
  menu.style = `display:${menu.style.display == "none" ? "block" : "none"}`;
};

const handelDropdwonItemClick = (event) => {
  const menu = document.getElementById("dropdown-menu");
  menu.style = `display:${menu.style.display == "none" ? "block" : "none"}`;
  issue = event.target.innerText;
};
const handelSubmitClick = () => {};
