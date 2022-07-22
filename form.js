function validateForm() {
  let useremail = document.forms["form1"]["fEmail"];
  let password = document.forms["form1"]["fPassword"];
  if (useremail.value == "") {
    useremail.style.border = "3px solid red";
    alert("Dont leave the email field empty😊😊");
    useremail.focus();
    return false;
  }
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // if (email.value.match(validRegex)) {
  //   alert("Valid email address!");
  //   username.style.border = "23px solid green";
  //   return true;
  // } else {
  //   alert("Invalid email address!");

  //   username.focus();
  // }
  // var regularExpression = /^[a-zA-Z0-9!@#$%^&*]$/;
  // if (password.value == "") {
  //   password.style.border = "2px solid red";
  //   alert("Please enter your password");
  //   password.focus();
  //   return false;
  // } else if (password.value.length < 6) {
  //   alert("Your password is short 😩😩");
  //   password.focus();
  //   return false;
  // } else if (password.length >= 6 && password.length < 16) {
  //   alert("Your password is in the acceptable range");
  // } else if (!regularExpression.test(newPassword)) {
  //   alert(
  //     "password should contain atleast one number and one special character"
  //   );
  //   return false;
  // }
  const cb = document.querySelector("exampleCheck1:checked");
  if (cb != true) {
    alert("Please accept our terms and conditions");
     return false;
  }else (cb == true){
    return true
  }
 
}

// if (
//   password.length < minNumberofChars || // true || false
//   password.length > maxNumberofChars
// )
var e = document.getElementById("select");
var strUser = e.options[e.selectedIndex].value;

var strUser1 = e.options[e.selectedIndex].text;
if (strUser == 0) {
  alert("Please select a user");
}
