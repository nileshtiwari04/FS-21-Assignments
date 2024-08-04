document.addEventListener('DOMContentLoaded', function () {
    const products = document.querySelectorAll('.product');
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    products.forEach(product => {
        const incrementButton = product.querySelector('.increment');
        const decrementButton = product.querySelector('.decrement');
        const quantityElement = product.querySelector('.quantity');

        incrementButton.addEventListener('click', () => {
            updateQuantity(product, quantityElement, 1);
        });

        decrementButton.addEventListener('click', () => {
            updateQuantity(product, quantityElement, -1);
        });
    });

    function updateQuantity(product, quantityElement, change) {
        let quantity = parseInt(quantityElement.textContent);
        quantity = Math.max(0, quantity + change);
        quantityElement.textContent = quantity;

        updateCart(product, quantity);
    }

    function updateCart(product, quantity) {
        const productId = product.getAttribute('data-id');
        const productName = product.querySelector('span').textContent;
        const productPrice = parseInt(product.getAttribute('data-price'));
        const existingCartItem = document.querySelector(`#cart-item-${productId}`);

        if (quantity > 0) {
            if (existingCartItem) {
                existingCartItem.querySelector('.item-quantity').textContent = quantity;
                existingCartItem.querySelector('.item-total').textContent = quantity * productPrice;
            } else {
                const cartItem = document.createElement('li');
                cartItem.id = `cart-item-${productId}`;
                cartItem.innerHTML = `
            ${productName} <span class="item-quantity">${quantity}</span> x ${productPrice} = <span class="item-total">${quantity * productPrice}</span>
        `;
                cartItems.appendChild(cartItem);
            }
        } else if (existingCartItem) {
            cartItems.removeChild(existingCartItem);
        }

        updateTotal();
    }

    function updateTotal() {
        let total = 0;
        document.querySelectorAll('#cart-items .item-total').forEach(itemTotal => {
            total += parseInt(itemTotal.textContent);
        });
        totalElement.textContent = total;
    }
});