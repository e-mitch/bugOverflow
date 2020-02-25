var fnameReadyToSubmit = true;
var lnameReadyToSubmit = true;
var emailReadyToSubmit = true;
var thumbnailReadyToSubmit = true;


let form = document.getElementById("userForm");
let fnameInput = document.getElementsByName('fnameInput')[0];
let fnameError = document.getElementById('fnameError');

fnameInput.addEventListener("change", () => {
  fnameValue = fnameInput.value;
  if (fnameValue.length < 2){
    fnameError.innerHTML = "Please enter a valid first name";
    fnameReadyToSubmit = false;
  } else{
    fnameError.innerHTML = "";
    fnameReadyToSubmit = true;
  }
});

let lnameInput = document.getElementsByName('lnameInput')[0];
let lnameError = document.getElementById('lnameError');

lnameInput.addEventListener("change", () => {
  lnameValue = lnameInput.value;
  if (lnameValue.length < 2){
    lnameError.innerHTML = "Please enter a valid last name";
    lnameReadyToSubmit = false;
  }else{
    lnameError.innerHTML = "";
    lnameReadyToSubmit = true;
  }  
});

let emailInput = document.getElementsByName('emailInput')[0];
let emailError = document.getElementById('emailError');

emailInput.addEventListener("change", () => {
  emailValue = emailInput.value;
  if (/\S+@\S+\.\S+/.test(emailValue) == false){
    emailError.innerHTML = "Please enter a valid email";
    emailReadyToSubmit = false;
  }else {
    emailReadyToSubmit = true;
    emailError.innerHTML = "";
  }
});

let thumbnailInput = document.getElementsByName('thumbnailInput')[0];
let thumbnailError = document.getElementById('thumbnailError');

thumbnailInput.addEventListener("change", () => {
  thumbnailValue = thumbnailInput.value;
  console.log("thumbnail value: " + thumbnailValue);
  if (thumbnailValue.endsWith('.gif') == false && thumbnailValue.endsWith('.jpg') == false && thumbnailValue.endsWith('.png') == false){
    thumbnailError.innerHTML = "Please enter a valid thumbnail";
    thumbnailReadyToSubmit = false;
  }else {
    thumbnailReadyToSubmit = true;
    thumbnailError.innerHTML = "";
  }
});

/*
form.addEventListener('submit',(event) =>{
  console.log("fname : " + fnameValue + " lname: " + lnameValue + " email: " + emailValue);
  if (fnameReadyToSubmit == false || lnameReadyToSubmit == false || emailReadyToSubmit == false || thumbnailReadyToSubmit == false){
    event.preventDefault();
  }
});
*/




