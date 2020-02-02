


//Input fields
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('passwort');
//Form
const form = document.getElementById('myForm');
//Validation colors
const green = '#4CAF50';
const red = '#F44336';

function validateFirstName() {
  //check if it is empty
if(checkIfEmpty(firstName)) return;

  //check if it has only letters
  if(!checkIfOnlyLetters(firstName)) return;
  return true;
}

function checkIfEmpty(field) {
  if(isEmpty(field.value.trim())) {
    //set field invalid
    setInvalid(field, `${field.name} must not be empty`);
    return true;
  } else {
    //set field valid
    setValid(field);
    return false;
  }
}
function isEmpty(value) {
  if(value === '') return true;
  return false;
}

function setInvalid(field, message) {
  field.className = 'invalid';
  field.nextElementSibling.innerHTML = message;
  field.nextElementSibling.style.color = red;
}

function setVvalid(field) {
  field.className = 'valid';
  field.nextElementSibling.innerHTML = '';
 // field.nextElementSibling.style.color = green;
}

function checkIfOnlyLetters(field) {
  if(/^[a-zA-Z ]+$/.test(field.value)) {
    setValid(field);
    return true;
  } else  {
    setInvalid(field, `${field.name} must contain only letters`);
    return false;
  }
}




















//function validateForm () {
  //var x = document.forms['my-Form']['f-name'].value
  //if (x === '') {
    //alert('First Name must be filled out')
    //return false
  //}
//};

//var expressValidator = require('express-validator');
//var expressSession = require('express-session');

*/