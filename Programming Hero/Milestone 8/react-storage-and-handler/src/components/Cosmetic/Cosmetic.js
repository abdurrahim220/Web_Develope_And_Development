import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {

    const { name, price, id } = props.cosmetic;

    const addToCart = (id) => {
        // localStorage.setItem(id,1);
        addToDb(id);

    }
    const removeCart = id =>{
        console.log("Remove",id);
        removeFromDb(id);
    }


    const addToCartParm = () => addToCart(id);

    return (
        <div className='product'>
            <h1>Buy This: {name}</h1>
            <p>Only for: ${price}</p>
            <p><small>It has id: {id}</small></p>
            <button onClick={addToCartParm}>Add To Cart</button>
            <button onClick={() => addToCart(id)}>Purchase</button>
            <button onClick={() => removeCart(id)}>Remove</button>


            {/* <h1>Buy This: {props.name}</h1>
            <p>Only for: ${props.price}</p> */}
        </div>
    );
};

export default Cosmetic;