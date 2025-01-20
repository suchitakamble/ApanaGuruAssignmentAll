// Array to store products
let products = [];
let stock = new Map();
let categories = new Set();

// Function to add a product
function handleAddProduct() {
    const id = parseInt(document.getElementById('productId').value);
    const name = document.getElementById('productName').value;
    const category = document.getElementById('productCategory').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const quantity = parseInt(document.getElementById('productQuantity').value);

    if (!id || !name || !category || price <= 0 || quantity < 0) {
        alert('Please enter valid product details.');
        return;
    }

    if (products.some(product => product.id === id)) {
        alert('Product ID must be unique.');
        return;
    }

    // Add product to the array
    const newProduct = { id, name, category, price, quantity };
    products.push(newProduct);

    // Add category and stock
    categories.add(category);
    stock.set(id, quantity);

    // Update the product table
    updateProductTable();

    // Clear form inputs
    document.getElementById('productId').value = '';
    document.getElementById('productName').value = '';
    document.getElementById('productCategory').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productQuantity').value = '';

    //alert(Product "${name}" added successfully.);
}

// Function to update the product table
function updateProductTable() {
    const tableBody = document.getElementById('productTable').querySelector('tbody');
    tableBody.innerHTML = '';

    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>${product.price.toFixed(2)}</td>
            <td>${product.quantity}</td>
        `;
        tableBody.appendChild(row);
    });
}