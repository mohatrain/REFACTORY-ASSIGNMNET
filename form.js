function validateForm(){
  const x = document.forms["form1"]["fName"].value;
  if ((x = "")) {
    alert("Please fill the entire form");
    return false;
  }
}