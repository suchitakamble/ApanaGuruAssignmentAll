// Simulated product data
const products = [
    { id: 1, name: "Smartphone", category: "electronics", price: 600, rating: 4.5, inStock: true },
    { id: 2, name: "T-Shirt", category: "fashion", price: 20, rating: 4.0, inStock: true },
    { id: 3, name: "Vacuum Cleaner", category: "home", price: 120, rating: 3.8, inStock: false },
    { id: 4, name: "Laptop", category: "electronics", price: 900, rating: 4.8, inStock: true },
    { id: 5, name: "Novel", category: "books", price: 15, rating: 4.2, inStock: true },
  ];
  
  // Show suggestions in real-time
  function showSuggestions(query) {
    const suggestions = document.getElementById("suggestions");
    suggestions.innerHTML = "";
    if (query.length > 0) {
      const matches = products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
      matches.forEach(match => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = match.name;
        suggestions.appendChild(li);
      });
    }
  }
  
  // Update price label
  function updatePriceLabel(value) {
    document.getElementById("priceLabel").textContent = `$0 - $${value}`;
  }
  
  // Search products based on filters
  function searchProducts() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const categories = Array.from(document.getElementById("categories").selectedOptions).map(option => option.value);
    const maxPrice = document.getElementById("priceRange").value;
    const minRating = document.getElementById("rating").value;
    const inStock = document.getElementById("inStock").checked;
  
    const results = products.filter(product => {
      return (
        product.name.toLowerCase().includes(query) &&
        (categories.length === 0 || categories.includes(product.category)) &&
        product.price <= maxPrice &&
        (!minRating || product.rating >= minRating) &&
        (!inStock || product.inStock)
      );
    });
  
    displayResults(results);
  }
  
  // Display results
  function displayResults(results) {
    const resultList = document.getElementById("resultList");
    resultList.innerHTML = "";
    if (results.length > 0) {
      results.forEach(product => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = `${product.name} - $${product.price} - Rating: ${product.rating}`;
        resultList.appendChild(li);
      });
    } else {
      resultList.innerHTML = "<li class='list-group-item'>No results found</li>";
    }
  }
  