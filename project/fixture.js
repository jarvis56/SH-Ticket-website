const cart = [];  // declares an empty array

function addToCart(productName, price) { 
    
    function findProduct(item) {  // defines a nested function, select  item to cart
        return item.productName === productName; // checks if the productName matches
    }

    const product = cart.find(findProduct); // if checks matches, saved in the product variable

    if (product) {
        product.quantity++; // if matching product found, increment
    } else {
        cart.push({ productName, price, quantity: 1 }); // add new product to the cart 
    }

    updateCart(); 
}
       

    
function removeFromCart(productName) {  //tickets
    const index = cart.findIndex(item => item.productName === productName); 

    if (index !== -1) {   
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
        } else {
            cart.splice(index, 1); 
        }

        updateCart();   
    }
}

function updateCart() {
    const cartItems = document.getElementById("cartItems"); 
    cartItems.innerHTML = "";

    let total = 0; 

    cart.forEach(item => {    
        const cartItem = document.createElement("li"); 
        const removeButton = document.createElement("button"); 
        removeButton.textContent = "Cancel"; 
        removeButton.className = "Cancel"; 
        removeButton.onclick = () => removeFromCart(item.productName);  

        cartItem.textContent = `${item.productName} x${item.quantity} - £${(item.price * item.quantity).toFixed(2)}`; 
        
        cartItem.appendChild(removeButton);
        cartItems.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    const cartTotal = document.getElementById("cartTotal");
    cartTotal.textContent = total.toFixed(2);   // two decimal places
}

       


function checkout() {
    
    alert("Payment unsuccessful.");
}