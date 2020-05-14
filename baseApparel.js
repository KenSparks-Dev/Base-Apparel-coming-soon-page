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
let submitBtn = document.querySelector(".btn")
submitBtn.style.marginLeft = "-75px"

let errorBtn = document.querySelector(".error-btn")
errorBtn.style.marginLeft = "-45px"
errorBtn.style.display = "none"

let emailForm = document.querySelector(".email")
 
function errorResponse(){
    submitBtn.style.marginLeft = "-10px"
    submitBtn.style.backgroundImage = "linear-gradient(to right ,hsl(0, 80%, 86%),hsl(0, 74%, 74%))"
    errorBtn.style.display = "inline"
    emailForm.style.border = "4px solid red"

}

submitBtn.addEventListener("click", errorResponse);

function goodResponse() {
  emailForm.style.border = "4px solid limegreen";
}