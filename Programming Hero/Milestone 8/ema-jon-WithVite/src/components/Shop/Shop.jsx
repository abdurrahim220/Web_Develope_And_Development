import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css'
import { addToDb, getShoppingCart } from '../utilities/fakedb';



const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    // load data
    useEffect(() => {
        fetch('products.json').then(res => res.json()).then(data => setProducts(data))
    }, []);
    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        //! step 1 -- get id of the add product
        for(const id in storedCart){
            // !step 2 -- get product form products state by using id
            const addedProduct = products.find(product => product.id===id)
            if(addedProduct){
                //! step3 add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // ! step -4 add the added product to the saved cart
                savedCart.push(addedProduct); 
            }
            //? console.log('added Product',addedProduct);
        }
        // ! step 5 -- set the cart 
        setCart(savedCart);

    }, [products]);

    const handleAddToCart = (product) => {
        // cart.push(product);
        let newCart  = [];
        // const newCart = [...cart, product];
        const exits = cart.find(pd => pd.id === product.id);
        if(!exits){
            product.quantity = 1;
            newCart= [...cart, product];
        }
        else{
            exits.quantity = exits.quantity+1;
            const remaining = cart.filter(pd=>pd.id !== product.id);
            newCart = [...remaining,exits];
        }
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                {/* <h3>Product Summery</h3>
                <p>Selected Item : {cart.length}</p> */}
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;