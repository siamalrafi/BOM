const getInputValueBuId = id => {
    const inputfiled = document.getElementById(id);
    const inputValue = inputfiled.value;
    inputfiled.value = '';
    return inputValue;
}
const addproduct = () => {
    const product = getInputValueBuId('product-name-filed');
    const quantity = getInputValueBuId('product-quantity-filed');
    addProductToDisplay(product, quantity)
    // localStorage.setItem(product, quantity);
    saveItemToLocalStorage(product, quantity)

}
const getShoppingCartFromLocalStorage = () => {
    let saveCart = localStorage.getItem('cart');
    let cart = {};
    if (saveCart) {
        cart = JSON.parse(saveCart);
    } else {
        return cart;
    }
}

const saveItemToLocalStorage = (product, quantity) => {
    const cart = getShoppingCartFromLocalStorage();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified)

}

const addProductToDisplay = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(li);

}
const displayProducts = () => {
    const cart = getShoppingCartFromLocalStorage();
    for (const product of cart) {
        const quantity = cart(product);
        console.log(product, quantity);
        addProductToDisplay(product, quantity)
    }
}
displayProducts()
