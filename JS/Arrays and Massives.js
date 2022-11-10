const myArray = [["Vulls", 23], ["vine", 45]];
//
const arr = [["John", 23], ["cat", 2]];
const oneDown = arr.pop()
console.log(oneDown);
console.log(arr);
//
const arr1 = [["John", 23], ["dog", 3]];
const removeArr1 = arr1.shift();
//
const shopList = [["milk", 1], ["eggs", 10], ["syrup", 1], ["chocolate bar", 3], ["bananas", 6]];
//
function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();
//
function functionWithArgs(a, b) {
    console.log(a + b);
  }
  functionWithArgs(10, 5)
  //
  function sum(a, b) {
    console.log(a + b);
  }
  sum(39,45)
  //return a Value of a Function with Return
  function timesFive(num) {
    return num * 5
  }
  
  const answer = timesFive(8);
  //Global Scope and Functions
  // Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
//Global vs. Local Scope in Functions
const outerWear = "T-Shirt";
function myOutfit() {
    var outerWear = "sweater";
return outerWear;
}
myOutfit();
//Understanding Undefined Value returned from a Function
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
sum += 5;
}

addThree();
addFive();
//Assignment with a Returned Value
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
// Setup
let proc = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
proc = processArg(7);