// Variables
function demonstrateVariables() {
    var globalVar = "I am a global variable";
  
    if (true) {
      let blockVar = "I am a block variable";
      const constVar = "I am a constant block variable";
      document.getElementById("variableOutput").innerText =
        `${globalVar}\n${blockVar}\n${constVar}`;
    }
  
    // The blockVar and constVar are not accessible here
    console.log(globalVar); // Works
  }
  
  // Arithmetic Operators
  function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter valid numbers.");
      return;
    }
  
    const sum = num1 + num2;
    const difference = num1 - num2;
    const product = num1 * num2;
    const quotient = num1 / num2;
  
    document.getElementById("arithmeticOutput").innerText = `
      Sum: ${sum}, Difference: ${difference},
      Product: ${product}, Quotient: ${quotient}
    `;
  }
  
  // Logical Operators
  function logicalOperations() {
    const bool1 = document.getElementById("bool1").checked;
    const bool2 = document.getElementById("bool2").checked;
  
    const and = bool1 && bool2;
    const or = bool1 || bool2;
    const notBool1 = !bool1;
  
    document.getElementById("logicalOutput").innerText = `
      AND: ${and}, OR: ${or}, NOT (Boolean 1): ${notBool1}
    `;
  }
  
  // Assignment Operators
  let score = 0;
  
  function increment() {
    score += 1;
    document.getElementById("assignmentOutput").innerText = `Score: ${score}`;
  }
  
  function decrement() {
    score -= 1;
    document.getElementById("assignmentOutput").innerText = `Score: ${score}`;
  }
  
  // Relational Operators
  function compareNumbers() {
    const num1 = parseFloat(document.getElementById("compare1").value);
    const num2 = parseFloat(document.getElementById("compare2").value);
    if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter valid numbers.");
      return;
    }
  
    const results = `
      Greater: ${num1 > num2},
      Less or Equal: ${num1 <= num2},
      Equal (==): ${num1 == num2},
      Strict Equal (===): ${num1 === num2},
      Not Equal (!=): ${num1 != num2},
      Strict Not Equal (!==): ${num1 !== num2}
    `;
    document.getElementById("relationalOutput").innerText = results;
  }
  
  // Data Types
  function determineDataType() {
    const input = document.getElementById("dataTypeInput").value;
    const type = typeof eval(input);
    document.getElementById("dataTypeOutput").innerText = `Type: ${type}`;
  }
  