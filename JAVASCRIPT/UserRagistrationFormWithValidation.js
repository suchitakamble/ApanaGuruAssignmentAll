const form = document.getElementById("registrationForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const fullNameError = document.getElementById("fullNameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return passwordRegex.test(password);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  // Validate Full Name
  if (fullName.value.trim() === "") {
    fullNameError.textContent = "Full name is required.";
    isValid = false;
  } else {
    fullNameError.textContent = "";
  }

  // Validate Email
  if (!validateEmail(email.value)) {
    emailError.textContent = "Invalid email address.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate Password
  if (!validatePassword(password.value)) {
    passwordError.textContent =
      "Password must be at least 8 characters long and include at least one number.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  // Validate Confirm Password
  if (password.value !== confirmPassword.value) {
    confirmPasswordError.textContent = "Passwords do not match.";
    isValid = false;
  } else {
    confirmPasswordError.textContent = "";
  }

  if (isValid) {
    alert("Registration successful!");
    form.reset();
  }
});
