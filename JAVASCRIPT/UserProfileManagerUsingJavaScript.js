// Define a UserProfile Object
const UserProfile = {
    name: "suchita kamble",
    age: 24,
    email: "suchita@123",
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001"
    },
    
    // Add methods to UserProfile
    displayInfo: function() {
      const output = `
        Name: ${this.name}
        Age: ${this.age}
        Email: ${this.email}
        Address: ${this.address.street}, ${this.address.city}, ${this.address.state}, ${this.address.zipCode}
      `;
      document.getElementById("output").innerText = output;
      console.log(output);
    },
    
    updateEmail: function(newEmail) {
      this.email = newEmail;
      alert("Email updated to: " + this.email);
    },
    
    updateAddress: function(newAddress) {
      this.address = newAddress;
      alert("Address updated to: " + JSON.stringify(this.address));
    },
  
    isAdult: function() {
      return validateAge(this.age) ? "User is an adult." : "User is not an adult.";
    }
  };
  
  // Implement a function outside the object
  function validateAge(age) {
    return age >= 18;
  }
  
  // Button Handlers
  function displayUserInfo() {
    UserProfile.displayInfo();
  }
  
  function updateEmail() {
    const newEmail = prompt("Enter new email:");
    if (newEmail) {
      UserProfile.updateEmail(newEmail);
    }
  }
  
  function updateAddress() {
    const newStreet = prompt("Enter new street:");
    const newCity = prompt("Enter new city:");
    const newState = prompt("Enter new state:");
    const newZipCode = prompt("Enter new zip code:");
    if (newStreet && newCity && newState && newZipCode) {
      const newAddress = {
        street: newStreet,
        city: newCity,
        state: newState,
        zipCode: newZipCode
      };
      UserProfile.updateAddress(newAddress);
    }
  }
  
  function checkIfAdult() {
    const message = UserProfile.isAdult();
    document.getElementById("output").innerText = message;
    alert(message);
  }