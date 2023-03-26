//? use local storage to manage cart data


// const addToDb = id => {
//     let shoppingCart = {};

//     //! get the shopping cart 
//     const storedCart = localStorage.getItem('shopping-cart');
//     if (storedCart) {

//         shoppingCart =JSON.parse(storedCart);
//     }
//     else {
//         shoppingCart = {};
//     };


//     const quantity = shoppingCart[id];
//     //* const quantity = localStorage.getItem(id);


//     if (quantity) {
//         const newQuantity = parseInt(quantity) + 1;
//         shoppingCart[id] = newQuantity;
//         //* localStorage.setItem(id, newQuantity)
//     }
//     else {
//         shoppingCart[id] = 1;
//         //* localStorage.setItem(id, 1)
//     }
//     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

// }

const addToDb = id => {
    let shoppingCart = {};

    // *Get shopping cart

    const storedCart = localStorage.getItem('shopping-cart');

    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }


    const quality = shoppingCart[id];

    if (quality) {
        const newQuality = parseInt(quality) + 1;

        shoppingCart[id] = newQuality;

    }
    else {
        shoppingCart[id] = 1;

    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}


// remove items
const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart');

    if(storedCart)
    {
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}


const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart')
}

export { addToDb, removeFromDb,deleteShoppingCart};