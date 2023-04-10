import React from 'react';

const Cart = ({ cart, handleRemoveFormCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please Add Some Product</p>
    }
    else {
        message = <div>
            <p>Bolorlox !!!</p>
            <h2>Thanks for Giving your money </h2>
        </div>
    }
    return (
        <div>
            <h2>Order Summary: {cart.length}</h2>
            {cart.length > 2
                ? <span>Aro Kino</span>
                : <span>Fokira</span>
            }
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} <button onClick={() => handleRemoveFormCart(tshirt._id)}>X</button></p>)
            }
            {
                cart.length === 2 && <p>Double bonanza!!</p>
            }
            {
                cart.length === 3 || <p>tinta to hoilo na</p>
            }
        </div>
    );
};

export default Cart;

/*

?1.conditional rendering
 -- use if else to set a variable that will container an element and container

?2. Ternary operator ? true : false

?3. logical && if the condition is true then next thing will be displayed
?4.logical or || if the conditon is false then next thing will be displayed 

*/

/*
conditional css class




*/