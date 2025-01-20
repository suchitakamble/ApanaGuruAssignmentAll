// Initialize an array to store items
let itemList = [];

// Function to add an item to the list
function addItem() {
    const inputField = document.getElementById('itemInput');
    const newItem = inputField.value.trim();

    if (newItem) {
        // Add the new item to the array
        itemList.push(newItem);

        // Save the updated array to localStorage as a JSON string
        localStorage.setItem('items', JSON.stringify(itemList));

        // Clear the input field
        inputField.value = '';

        // Update the displayed list
        displayItems();
    } else {
        alert('Please enter a valid item.');
    }
}

// Function to load items from localStorage
function loadItems() {
    const storedItems = localStorage.getItem('items');

    if (storedItems) {
        // Parse the JSON string back into an array
        itemList = JSON.parse(storedItems);
        displayItems();
    } else {
        alert('No items found in localStorage.');
    }
}

// Function to display the items on the page
function displayItems() {
    const itemListElement = document.getElementById('itemList');
    itemListElement.innerHTML = ''; // Clear the current list

    itemList.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${item}`;
        itemListElement.appendChild(listItem);
    });
}

// Add event listeners to buttons
document.getElementById('addButton').addEventListener('click', addItem);
document.getElementById('loadButton').addEventListener('click', loadItems);

// Load items from localStorage on page load
window.onload = loadItems;
