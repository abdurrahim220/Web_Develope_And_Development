const addProduct = () => {
    const productField = document.getElementById('product-name')
    const quantityField = document.getElementById('product-quantity')
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';
    // console.log(product,quantity);
    displayDocument(product, quantity);
    savePorductToLocalStorage(product, quantity);

}

const displayDocument = (product, quantity) => {
    const productContainer = document.getElementById('product-container')
    const liList = document.createElement('li')
    liList.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(liList);
}

// store data
const getStoredShoppingCart = () => {
    let cart = {};
    const storeCart = localStorage.getItem('cart');
    if (storeCart) {
        cart = JSON.parse(storeCart);
    }
    return cart;
}

const savePorductToLocalStorage = (product, quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    console.log(cart);
    const cartStringfyJson = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringfyJson);
}

const displayProductFormLocalStorage = ()=>{
    const saveCart = getStoredShoppingCart();
    console.log(saveCart);
    for(const product in saveCart){
        const quantity = saveCart[product]
        console.log(product,quantity);
        displayDocument(product,quantity)
    }
}
displayProductFormLocalStorage()