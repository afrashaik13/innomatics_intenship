let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id, name, price) {
    let product = cart.find(item => item.id === id);
    if (product) {
        product.quantity++;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    console.log("Updating Cart: ", cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    document.getElementById("cart-items").innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = `${item.name} - $${item.price} x ${item.quantity} <button onclick="removeFromCart(${item.id})">Remove</button>`;
        document.getElementById("cart-items").appendChild(li);
        total += item.price * item.quantity;
    });

    document.getElementById("total-price").textContent = total;
    document.getElementById("cart-count").textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

function clearCart() {
    cart = [];
    updateCart();
}

function toggleCart() {
    console.log("Cart toggled");
    function toggleCart() {
        console.log("Cart toggled");
        document.getElementById("cart").classList.toggle("show");
    }
    
}

updateCart();


