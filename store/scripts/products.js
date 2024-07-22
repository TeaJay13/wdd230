document.addEventListener("DOMContentLoaded", async function() {
    const response = await fetch('data/products.json');
    const products = await response.json();
    const productContainer = document.querySelector('#product-list');

    products.forEach(product => {
        const productCard = `
            <div class="product">
                <img class="product-imgs" loading="lazy" src="${product.imageUrl}" alt="${product.name}" height="300">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>$${product.price.toFixed(2)}</p>
                <a href="order.html?id=${product.sku}" class="button">Buy Product</a>
            </div>
        `;
        productContainer.innerHTML += productCard;
    });
});

function toggleView(viewType) {
    const container = document.getElementById('product-list');
    if (viewType === 'list') {
        container.className = 'list-view'; // Set the container to list view mode
    } else {
        container.className = 'grid-view'; // Set the container to grid view mode
    }
}
