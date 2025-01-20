// Function to fetch data from the API
async function fetchData() {
    const searchInput = document.getElementById('searchInput').value.trim(); // Get the search term

    if (!searchInput) {
        displayMessage('Please enter a search term.', 'error');
        return;
    }

    const apiUrl = `https://www.omdbapi.com/?s=${searchInput}&apikey=your_api_key`; // Replace 'your_api_key' with your actual API key
    displayMessage('Fetching data...', 'loading');

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.Response === 'True') {
            displayResults(data.Search);
        } else {
            displayMessage(data.Error, 'error');
        }
    } catch (error) {
        displayMessage('Failed to fetch data. Please try again later.', 'error');
        console.error(error);
    }
}

// Function to display results
function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results

    results.forEach((item) => {
        const resultDiv = document.createElement('div');
        resultDiv.className = 'result';

        resultDiv.innerHTML = `
            <img src="${item.Poster !== 'N/A' ? item.Poster : 'placeholder.jpg'}" alt="${item.Title}">
            <h3>${item.Title}</h3>
            <p>${item.Year}</p>
        `;

        resultsContainer.appendChild(resultDiv);
    });
}

// Function to display messages (loading, error, etc.)
function displayMessage(message, type) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `<p class="${type}">${message}</p>`;
}

// Event listener for the search button
document.getElementById('searchButton').addEventListener('click', fetchData);
