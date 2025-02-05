
document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    const checkoutBtn = document.getElementById('checkout-btn');
    let cart = [];

    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;
        let itemCount = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)} (x${item.quantity})`;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                removeFromCart(item.name);
            });
            li.appendChild(removeButton);
            cartItems.appendChild(li);

            total += item.price * item.quantity;
            itemCount += item.quantity;
        });

        totalPrice.textContent = `Total (${itemCount} item${itemCount !== 1 ? 's' : ''}): $${total.toFixed(2)}`;
    }

    function addToCart(name, price) {
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ name, price, quantity: 1 });
        }
        updateCart();
    }

    function removeFromCart(name) {
        cart = cart.filter(item => item.name !== name);
        updateCart();
    }

    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
        } else {
            alert('Proceeding to payment gateway... (This is a placeholder)');
        }
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));
            addToCart(name, price);
        });
    });
});
