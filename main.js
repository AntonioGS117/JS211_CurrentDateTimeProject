// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!!


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
let number = 123;
let str = String(number);
console.log(str); 




// Write a JavaScript program to convert a string to the number.
let a = "777";
parseInt(a)+ 223;


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  function checkDatatypes(element) {
    if (element === true || element === false) { console.log("Boolean")
  }
if (element === null ) {console.log("Null")}
if (element === undefined) {console.log("Undefined")}

if (typeof element === 'number') {
  console.log(element + 'is a number');
} else if (typeof element === 'string') {
    console.log(element + 'is a string');
  } else {
    console.log(element + ' is neither a number nor a string');
  }
}
if (element === NaN) {console.log("Nan")}
if (element === string) {console.log("String")}
}
  console.log(checkDatatypes(null))
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
// NOTE: Exlclude this function while completing Part II. The Data Type will always return as a String. If you want a challenge, come back to this function and start in the console. Then see what you can make of it. Again, simply skip this function while completing Part II of this project.
  

  
// Write a JavaScript program that adds 2 numbers together.
function addNumbers(num1, num2) {
  return num1 + num2;}

  let number1 = 25;
  let number2 = 25;
  let sum = addNumbers(number1, number2);

console.log("The sum of", number1, "and", number2, "is", sum);



// Write a JavaScript program that runs only when 2 things are true.
var x = 26;
var y = 26;
var z = 28;

function trueTwo(a, b, c){
  if(a === b && c > b){
    return true;}
  }
console.log(trueTwo(x, y, z));



// Write a JavaScript program that runs when 1 of 2 things are true.

function runWhenTrue(condition1, condition2) {
  if (condition1 || condition2) {
      console.log("One of the conditions is true. Running the program.");
  } else {
      console.log("Neither condition is true. The program will not run.");
  }
}
let condition1 = true;
let condition2 = false;


// Write a JavaScript program that runs when both things are not true. 







// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
