/* ================================= */
/* ====== By John McCutchan ======== */
/* ================================= */
//
console.log("Begin."); //**** Message
//
/* +++++++++ DEV TOOL ++++++++++++++ */
document.querySelector("body").addEventListener("click", function(e) {
  console.log(e);
});
/* +++ REMOVE BEFORE PRODUCTION ++++ */
//
/* ================================= */
/* ====== Global Vars ============== */
/* ================================= */
var testString = "";
var outPut = "";
var outHTML = "";
//
/* ================================= */
/* ====== Listeners ================ */
/* ================================= */
//
document.getElementById("add").addEventListener("click", getString);
//
/* ================================= */
/* ====== Get Value of Input ======= */
/* ================================= */
function getString(){
  testString = document.getElementById("inputText").value;
  console.log("From input: ",testString);
  reversal();
}
//
/* ================================= */
/* ====== Reversal ================= */
/* ================================= */
function reversal() {
  for(var i = 0; i < testString.length; i ++){
    console.log(i);

  }
  console.log("Reversal");
  alphabits();
}
//
/* ================================= */
/* ====== Alphabits ================ */
/* ================================= */
function alphabits() {
  for(var i = 0; i < testString.length; i ++){
    console.log(i);
  }
  console.log("Alphabits");
  palindrome();
}
//
/* ================================= */
/* ====== Palindrome =============== */
/* ================================= */
function palindrome() {
  for(var i = 0; i < testString.length; i ++){
    console.log(i);
  }
  console.log("Palindrome");
}
// END

/*
## Instructions

1. Implement the logic in the `reversal` function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.
1. Implement the logic in the `alphabits` function that return the characters in alphabetical order, and outputs the result in the DOM, below the text input.
1. Implement the logic in the `palindrome` function that determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
1. When the user presses the enter key in the text input, or clicks the button, set the value of the `testString` variable (see below) to the value of the input.
1. The output of each of the functions should immediately appear as well.




reversal(testString);
alphabits(testString);
palindrome(testString);
*/
// End loop
