/* ================================= */
/* ====== By John McCutchan ======== */
/* ================================= */
//
console.log("Begin."); //**** Message
listenS();
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
var holder; // holds math operator
var num1 = 0; // holds the first number
var num2 = 0; // holds the second number
var result = 0; // holds the math result
//
/* ================================= */
/* ====== Listeners ================ */
/* ================================= */
function listenS(){
  document.getElementById("add").addEventListener("click", additionNow); // add listener
  document.getElementById("subtract").addEventListener("click", subtractionNow); // subtract listener
  document.getElementById("multiply").addEventListener("click", multiplicationNow); // multiply listener
  document.getElementById("divide").addEventListener("click", divisionNow); // divide listener
  document.getElementById("clear").addEventListener("click", clearNumbers); // divide listener
  console.log("Listeners turned on."); //**** Message
}
//
/* ================================= */
/* ====== Addition ================= */
/* ================================= */
//
/*
Create a function that adds two numbers
passed in as arguments. Return the sum.
*/
function additionNow(){
  holder = "+";
  console.log("Add clicked: ", holder);
  getNumbers();
}
//
/* ================================= */
/* ====== Subtract ================= */
/* ================================= */
//
/*
Create a function that subtracts two numbers
passed in as arguments. Return the difference.
*/
function subtractionNow(){
  holder = "-";
  console.log("Subtract clicked: ", holder);
  getNumbers();
}
/* ================================= */
/* ====== Divide =================== */
/* ================================= */
//
/*
Create a function that divides two numbers
passed in as arguments. Return the quotient.
*/
function divisionNow(){
  holder = "/";
  console.log("Divide clicked: ", holder);
  getNumbers();
}
/* ================================= */
/* ====== Multiply ================= */
/* ================================= */
//
/*
Create a function that multiplies two numbers
passed in as arguments. Return the product.
*/
function multiplicationNow(){
  holder = "*";
  console.log("Multiply clicked: ", holder);
  getNumbers();
}
/* ================================= */
/* ====== Get Numbers ============== */
/* ================================= */
//
function getNumbers(){
  num1 = document.getElementById("numOne").value;
  num2 = document.getElementById("numTwo").value;
  console.log(num1, num2);
  doMath(num1, num2, holder);
}
/* ================================= */
/* ====== Do Math ================== */
/* ================================= */
//
/*
Create a function that accepts three arguments.
1. First number
2. Second number
3. A function that performs an operation on them
4. Return the value of the operation.
*/
function doMath(nm1, nm2, op){
  if(op === "+"){
    holder = Number(nm1) + Number(nm2);
  }
  if(op === "-"){
    holder = Number(nm1) - Number(nm2);
  }
  if(op === "*"){
    holder = Number(nm1) * Number(nm2);
  }
  if(op === "/"){
    holder = Number(nm1) / Number(nm2);
  }
  console.log("Result: ",holder);
  showNumber();
}
/* ================================= */
/* ====== Fill HTML ================ */
/* ================================= */
//
function showNumber(){
  document.getElementById("putNumHere").innerHTML = holder;
}
/* ================================= */
/* ====== Clear ==================== */
/* ================================= */
//
function clearNumbers(){
  document.getElementById("putNumHere").innerHTML = "";
  document.getElementById("numOne").value = "";
  document.getElementById("numTwo").value = "";
  holder = "";
  num1 = 0;
  num2 = 0;
}
// END
/*
## Instructions

1. Create an HTML file that has two input fields to accept the two numbers to perform operations on.
2. Create 4 buttons to perform each of the basic mathematical functions (add, subtract, multiply, divide).
3. In your JavaScript, put an event listener on each of the buttons.
4. Copy the code below an implement a basic calculator.
5. When the user performs one of the operations, output the result to another DOM element of your choice.
*/
