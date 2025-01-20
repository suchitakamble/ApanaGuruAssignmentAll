// Greeting Functionality
document.getElementById("greetButton").addEventListener("click", function () {
    const nameInput = document.getElementById("nameInput").value;
    if (nameInput.trim() === "") {
      alert("Please enter your name.");
      return;
    }
    alert(`Hello, ${nameInput}!`);
    document.getElementById("greetingMessage").innerHTML = `Welcome, ${nameInput}!`;
    console.log(`Entered Name: ${nameInput}`);
  });
  
  // Hover Color Change
  const hoverElement = document.getElementById("hoverElement");
  hoverElement.addEventListener("mouseover", function () {
    hoverElement.style.backgroundColor = "lightgreen";
  });
  hoverElement.addEventListener("mouseout", function () {
    hoverElement.style.backgroundColor = "lightblue";
  });
  
  // Number Even/Odd Check
  document.getElementById("checkNumberButton").addEventListener("click", function () {
    const numberInput = document.getElementById("numberInput").value;
    if (numberInput === "") {
      alert("Please enter a number.");
      return;
    }
    const number = parseInt(numberInput, 10);
    const result = number % 2 === 0 ? "even" : "odd";
    document.getElementById("numberResult").innerHTML = `The number ${number} is ${result}.`;
  });
  