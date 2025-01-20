// 1. Hoisting
function demonstrateHoisting() {
    let result = "";

    // Example of variable hoisting
    result += "Variable Hoisting:\n";
    result += "Before declaration: " + x + "\n"; // x is undefined
    var x = 10;
    result += "After declaration: " + x + "\n";

    // Example of function hoisting
    result += "\nFunction Hoisting:\n";
    result += sayHello(); // Function is called before its declaration
    function sayHello() {
        return "Hello, Hoisting!";
    }

    // Using var, let, and const
    result += "\nvar, let, const Example:\n";
    var a = "var variable";
    let b = "let variable";
    const c = "const variable";
    result += `var: ${a}, let: ${b}, const: ${c}\n`;

    // Name collision
    var example = "This is a var example";
    function example() {
        return "This is a function example";
    }
    result += "Function vs var collision: " + example + "\n";

    document.getElementById("hoistingResult").innerText = result;
}

// 2. Error Handling
function handleDivision() {
    const input = document.getElementById("numberInput").value;
    let result = "";

    try {
        const number = parseFloat(input);
        if (isNaN(number)) {
            throw new Error("Input is not a valid number!");
        }
        const divisor = 100;
        if (number === 0) {
            throw new Error("Division by zero is not allowed!");
        }
        const divisionResult = divisor / number;
        result = `Result: ${divisor} / ${number} = ${divisionResult}`;
    } catch (error) {
        result = `Error: ${error.message}`;
    } finally {
        document.getElementById("numberInput").value = ""; // Reset input
    }

    document.getElementById("errorHandlingResult").innerText = result;
}
