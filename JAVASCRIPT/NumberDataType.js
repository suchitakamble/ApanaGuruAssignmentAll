const outputDiv = document.getElementById('output');
function log(message) {
  const p = document.createElement('p');
  p.textContent = message;
  outputDiv.appendChild(p);
}

// 1. Create a variable to hold a number value
let integerNumber = 42; // Integer number
let floatingPointNumber = 42.5; // Floating-point number
log("Integer Number: " + integerNumber);
log("Floating-Point Number: " + floatingPointNumber);

// 2. Convert the number to a string using .toString() and log the result
let numberAsString = integerNumber.toString();
log("Number as String: " + numberAsString);

// 3. Check if the number is an integer using Number.isInteger()
log("Is Integer Number an Integer? " + Number.isInteger(integerNumber));
log("Is Floating Point Number an Integer? " + Number.isInteger(floatingPointNumber));

// 4. Round the number to the nearest integer using Math.round()
log("Rounded Integer Number: " + Math.round(integerNumber));
log("Rounded Floating-Point Number: " + Math.round(floatingPointNumber));

// 5. Use Math.ceil() to round up to the next largest integer
log("Ceiling of Integer Number: " + Math.ceil(integerNumber));
log("Ceiling of Floating-Point Number: " + Math.ceil(floatingPointNumber));

// 6. Use Math.floor() to round down to the nearest integer
log("Floor of Integer Number: " + Math.floor(integerNumber));
log("Floor of Floating-Point Number: " + Math.floor(floatingPointNumber));

// 7. Calculate the square root using Math.sqrt()
log("Square Root of Integer Number: " + Math.sqrt(integerNumber));

// 8. Use Math.pow() to raise the number to a specified power
log("Integer Number to the Power of 2: " + Math.pow(integerNumber, 2));
log("Floating-Point Number to the Power of 3: " + Math.pow(floatingPointNumber, 3));

// 9. Use Math.max() and Math.min() with an array of numbers
let numbersArray = [3, 9, -5, 42, 7];
log("Maximum Value: " + Math.max(...numbersArray));
log("Minimum Value: " + Math.min(...numbersArray));

// 10. Check if a value is NaN using isNaN()
let invalidNumber = "Not a number";
log("Is NaN: " + isNaN(invalidNumber));

// 11. Handle cases where user input is NaN
function validateNumber(input) {
  if (isNaN(input)) {
    log("Error: Input is not a valid number.");
  } else {
    log("Valid Number: " + input);
  }
}
validateNumber("abc"); // Example of invalid input
validateNumber(123); // Example of valid input
