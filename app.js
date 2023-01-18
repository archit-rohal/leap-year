var btnTranslate = document.querySelector("#btn-translate")
var textInput = document.querySelector("#txt")
var outputDiv = document.querySelector("#output")
var no = "\nIt's not a leap year";
var yes = "\nIt's a leap year";
var errorMessage = "\nPlease enter a valid year in digits"
var yearOutOfRange = "\nYear should be between 1582 and 10000"

function clickHandler() {
  var year = textInput.value;
  btnTranslate.style.backgroundColor = "coral";
  textInput.style.color = "blue";
  if (isNaN(year)) {
      outputDiv.innerText = errorMessage;
  } else if (year < 1582 || year > 10000) {
    outputDiv.innerText = yearOutOfRange;
  } else if (year % 4 !== 0) {
    outputDiv.innerText = no;
  } else if (year % 100 !== 0) {
    outputDiv.innerText = yes;
  } else if (year % 400 !== 0) {
    outputDiv.innerText = no;
  } else {
    outputDiv.innerText = yes;
  }
}
btnTranslate.addEventListener("click", clickHandler)
