// Conditional Statements
function checkAge() {
    const age = document.getElementById("age").value;
    const result = age >= 18 ? "You are an adult." : "You are under 18.";
    document.getElementById("ageResult").textContent = result;
}

function checkMinorOrAdult() {
    const age = document.getElementById("age").value;
    const result = age < 18 ? "Minor" : "Adult";
    document.getElementById("minorResult").textContent = result;
}

function getGrade() {
    const score = document.getElementById("score").value;
    let grade;
    if (score >= 90) grade = "A";
    else if (score >= 80) grade = "B";
    else if (score >= 70) grade = "C";
    else if (score >= 60) grade = "D";
    else grade = "F";
    document.getElementById("gradeResult").textContent = `Your grade is ${grade}`;
}

function getDayOfWeek() {
    const day = parseInt(document.getElementById("day").value);
    let dayName;
    switch (day) {
        case 1: dayName = "Monday"; break;
        case 2: dayName = "Tuesday"; break;
        case 3: dayName = "Wednesday"; break;
        case 4: dayName = "Thursday"; break;
        case 5: dayName = "Friday"; break;
        case 6: dayName = "Saturday"; break;
        case 7: dayName = "Sunday"; break;
        default: dayName = "Invalid day"; break;
    }
    document.getElementById("dayResult").textContent = dayName;
}

function canDrive() {
    const hasLicense = document.getElementById("hasLicense").value.toLowerCase();
    const result = hasLicense === "yes" ? "You can drive!" : "You cannot drive.";
    document.getElementById("driveResult").textContent = result;
}

// Functions
function addNumbers() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("sumResult").textContent = `Sum: ${num1 + num2}`;
}

const findMax = function() {
    const array = document.getElementById("arrayInput").value.split(',').map(Number);
    const max = Math.max(...array);
    document.getElementById("maxResult").textContent = `Max: ${max}`;
};

const toUpperCase = () => {
    const input = document.getElementById("stringInput").value;
    document.getElementById("uppercaseResult").textContent = input.toUpperCase();
};

// Loops
function printTable() {
    const number = parseInt(document.getElementById("tableNumber").value);
    let result = '';
    for (let i = 1; i <= 10; i++) {
        result += `${number} x ${i} = ${number * i}<br>`;
    }
    document.getElementById("tableResult").innerHTML = result;
}

function countdown() {
    let start = parseInt(document.getElementById("countdownStart").value);
    let result = '';
    while (start >= 0) {
        result += `${start} `;
        start--;
    }
    document.getElementById("countdownResult").textContent = result;
}

function quiz() {
    let correct = false;
    do {
        const answer = prompt("What is 2 + 2?");
        if (answer === "4") {
            correct = true;
            document.getElementById("quizResult").textContent = "Correct! Well done.";
        } else {
            alert("Wrong! Try again.");
        }
    } while (!correct);
}
