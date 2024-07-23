// Order confirmation page URL API display

// Display selected product in order page
let url = new URL(window.location.href);
let params = url.searchParams;

// Get URL parameters
let firstName = params.get('first-name');
let lastName = params.get('last-name');
let email = params.get('email');
let phone = params.get('phone');
let address = `${params.get('address')}, ${params.get('city')}, ${params.get('state')} ${params.get('zip')}`;
let giftMessage = params.get('gift-message');
let productId = params.get('product-id');

let orderDate = new Date();
let deliveryDate = new Date(orderDate);
deliveryDate.setDate(orderDate.getDate() + 5);

document.addEventListener("DOMContentLoaded", async function() {
    const response = await fetch('data/products.json');
    const products = await response.json();
    const order = products.find(p => p.sku === productId);

    const orderContainer = document.querySelector('#order-confirmation');
    const orderCard = `
        <div>
            <h3>Order Confirmation</h3>
            <p>Dear ${firstName} ${lastName},</p>
            <p>Thank you for your order!</p>
            <p>Order Date: ${orderDate.toLocaleDateString()}</p>
            <p>Estimated Delivery Date: ${deliveryDate.toLocaleDateString()}</p>
            <p>Please note that payment is due on delivery.</p>
            <h3>Order Summary</h3>
            <ul id="order-item">
                <li>Product ID: ${productId}</li>
                <li>Product Name: ${order.name}</li>
                <li>Product Description: ${order.description}</li>
                <li>Product Price: $${order.price.toFixed(2)}</li>
            </ul>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Address: ${address}</p>
            <p>Gift Message: ${giftMessage || 'None'}</p>
        </div>
    `;

    orderContainer.innerHTML += orderCard;
});


