document.addEventListener("DOMContentLoaded", async function() {
    const response = await fetch('data/products.json');
    const products = await response.json();
    const dynamicProducts = document.querySelector('#featured-products');

    // Filter products by featured true/false
    const filteredProducts = products.filter(product => product.featured === true);

    // Function to get a specified number of random products
    function getRandomProducts(array, num) {
        const randomProducts = [];
        const selectedIndex = new Set();
        
        // Get random products until the specified number is reached or all products are selected
        while (randomProducts.length < num && selectedIndex.size < array.length) {
            const randomIndex = Math.floor(Math.random() * array.length);
            if (!selectedIndex.has(randomIndex)) {
                randomProducts.push(array[randomIndex]);
                selectedIndex.add(randomIndex);
            }
        }
        
        return randomProducts;
    }

    // Get 3 random products
    const randomProducts = getRandomProducts(filteredProducts, 3);

    // Display the random products
    randomProducts.forEach(product => {
        const productCard = `
            <div class="card f-card">
                <img class="f-product-imgs" loading="lazy" src="${product.imageUrl}" alt="${product.name}" height="300">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
            </div>
        `;
        dynamicProducts.innerHTML += productCard;
    });
});
