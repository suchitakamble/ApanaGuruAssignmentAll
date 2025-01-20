// Function to display current window properties
function displayWindowProperties() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const currentURL = window.location.href;

    document.getElementById('windowWidth').textContent = `Width: ${windowWidth}px`;
    document.getElementById('windowHeight').textContent = `Height: ${windowHeight}px`;
    document.getElementById('currentURL').textContent = `URL: ${currentURL}`;
}

// Function to display screen properties
function displayScreenProperties() {
    const screenWidth = screen.width;
    const screenHeight = screen.height;
    const colorDepth = screen.colorDepth;

    document.getElementById('screenWidth').textContent = `Screen Width: ${screenWidth}px`;
    document.getElementById('screenHeight').textContent = `Screen Height: ${screenHeight}px`;
    document.getElementById('colorDepth').textContent = `Color Depth: ${colorDepth} bits`;
}

// Function to reload the page
function refreshPage() {
    location.reload();
}

// Function to navigate to a different URL
function navigateToURL() {
    const newURL = "https://www.example.com";
    window.location.href = newURL;
}

// Function to open a new window
function openNewWindow() {
    const newWindowURL = "https://www.example.com";
    window.open(newWindowURL, '_blank');
}

// Event listeners for buttons
document.getElementById('refreshButton').addEventListener('click', refreshPage);
document.getElementById('navigateButton').addEventListener('click', navigateToURL);
document.getElementById('openWindowButton').addEventListener('click', openNewWindow);

// Initialize properties display on page load
window.onload = function () {
    displayWindowProperties();
    displayScreenProperties();
};
