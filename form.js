function validateForm() {
  let useremail = document.forms["form1"]["fEmail"];
  let password = document.forms["form1"]["fPassword"];
  if (useremail.value == "") {
    useremail.style.border = "3px solid red";
    alert("Dont leave the email field empty😊😊");
    useremail.focus();
    return false;
  } else {
    useremail.style.border = "3px solid green";
  }
  //PASSWORD VALIDATION
  var p = password.value;
  if (p.length < 8) {
    alert("Your password must be at least 8 characters");
    password.focus();
    password.style.border = "3px solid red";
    return false;
  } else if (p.search(/[a-z]/g) < 0) {
    alert("Your password must contain at least one lowercase letter.");
    password.focus();
    password.style.border = "3px solid red";
    return false;
  } else if (p.search(/[A-Z]/g) < 0) {
    alert("Your password must contain at least one uppercase letter.");
    password.focus();
    password.style.border = "3px solid red";
    return false;
  } else if (p.search(/[0-9]/) < 0) {
    alert("Your password must contain at least one digit.");
    password.focus();
    password.style.border = "3px solid red";
    return false;
  } else {
    password.style.border = "3px solid green";
  }

  //CHECKBOX VALIDATION
  var testCheckbox = document.getElementById("exampleCheck1");
  if (!testCheckbox.checked) {
    alert("OOOPPPPPPS you've not accepted our terms and conditions😩😩😩!!");
    testCheckbox.focus();
    return false;
  }
  // myCars["Benz"]
  //SELECT VALIDATION
  var e = document.getElementById("select");
  var optionSelIndex = e.options[e.selectedIndex].value;
  var optionSelectedText = e.options[e.selectedIndex].text;
  if (optionSelIndex == 0) {
    alert("Please select your respective age group");
    e.style.border = "3px solid red";
    return false;
  } else {
    alert("Success !! You have selected an age group: " + optionSelectedText);
    e.style.border = "3px solid green";
  }

  // myCars = ["Benz","Prado","Hyundai"];
  // myCars["Benz"]

  // CHECKBOX VALIDATION
  var check = document.getElementById("flexRadioDefault1");
  if (
    document.getElementById("flexRadioDefault1").checked == true ||
    document.getElementById("flexRadioDefault2").checked == true
  ) {
    alert("Thanks for making a choice👌👌");
  } else {
    alert("Please make a choice");
    check.focus();
    return false;
  }

  alert("Until Next Time.............");
}
