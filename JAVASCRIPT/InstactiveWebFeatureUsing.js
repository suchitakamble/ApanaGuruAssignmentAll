// Mouse Events
const colorButton = document.getElementById("colorButton");

// Change button color on hover
colorButton.addEventListener("mouseover", () => {
  colorButton.style.backgroundColor = "lightblue";
});

// Revert button color on mouse out
colorButton.addEventListener("mouseout", () => {
  colorButton.style.backgroundColor = "";
});

// Log message to console on click
colorButton.addEventListener("click", () => {
  console.log("Button clicked!");
});

// Keyboard Events
const inputBox = document.getElementById("inputBox");
const charCount = document.getElementById("charCount");
const itemList = document.getElementById("itemList");

// Update character count in real time
inputBox.addEventListener("input", () => {
  charCount.textContent = `Character Count: ${inputBox.value.length}`;
});

// Add item to list on Enter key press
inputBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter" && inputBox.value.trim() !== "") {
    const newItem = document.createElement("li");
    newItem.textContent = inputBox.value;
    itemList.appendChild(newItem);
    inputBox.value = "";
    charCount.textContent = "Character Count: 0";
  }
});

// Other Events
// Focus event to change input border color
inputBox.addEventListener("focus", () => {
  inputBox.style.borderColor = "green";
});

// Blur event to revert border color
inputBox.addEventListener("blur", () => {
  inputBox.style.borderColor = "";
});
