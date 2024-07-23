// Display selected product in order page
let url = new URL(window.location.href);
let params = url.searchParams;

// Use html id to find sku and use sku to find product from products.json
let sku = params.get('id');

document.addEventListener("DOMContentLoaded", async function() {
    const response = await fetch('data/products.json');
    const products = await response.json();
    const product = products.find(p => p.sku === sku);

    const productContainer = document.querySelector('#selected-product');
    const productCard = `
        <div>
            <img class="or-product-imgs" loading="lazy" src="${product.imageUrl}" alt="${product.name}" height="300">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>$${product.price.toFixed(2)}</p>
            <p>Price with tax: $${addTax(product.price).toFixed(2)}</p>
        </div>
    `;
    productContainer.innerHTML += productCard;

    // Set the value of the hidden input field
    document.getElementById('product-id').value = sku;
});

// Function to add tax to the total price
function addTax(price) {
    const taxRate = 0.05;
    const tax = price * taxRate;
    return price + tax;
}
