import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    //const cart = props.cart; //!option 1
    //const {cart} = props; //!option 2
    console.log(cart);

    let total = 0;
    let cartShipping = 0;
    for(const product of cart)
    {
        total += product.price;
        cartShipping += product.shipping;
    }
    const tax = total * 7/100;
    const grandTotal = total + cartShipping + tax;
    return (
        <div className='cart'>
            <h3>Order Summery</h3>
            <p>Selected Item : ${cart.length}</p>
            <p>Total Price : ${total.toFixed(2)}</p>
            <p>Total Shipping : ${cartShipping.toFixed(2)}</p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <p>Grand Total : ${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;