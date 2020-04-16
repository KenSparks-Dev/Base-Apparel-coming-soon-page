function validateEmail(InputText) {
  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (InputText.value.match(mailFormat)) {
    alert("you have entered a valid email address");
    document.form1.text1.focus();
    return true
  } else {
    alert("You have entered an invalid email address!");
    document.form1.text1.focus();
    return false;
  }
}