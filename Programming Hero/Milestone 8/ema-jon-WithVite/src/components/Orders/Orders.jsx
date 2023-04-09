import React, { useState } from 'react';
import Cart from '../cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();

    const [cart, setCart] = useState(savedCart);

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(pd=>pd.id !== id)
        setCart(remaining);
        removeFromDb(id);
    }

const handleClearCart = () =>{
    setCart([]);
    deleteShoppingCart();    

}

    // console.log(cart);
    console.log(savedCart);
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {/* <h3>This is order page : {cart.length}</h3> */}
                {
                    cart.map(product => <ReviewItem
                        key={product.id} product={product}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}
                handleClearCart={handleClearCart}
                ></Cart>
               <Link to='/checkout'><button className='btn-proceed'>Proceed Checkout</button></Link>
            </div>
        </div>
    );
};

export default Orders;