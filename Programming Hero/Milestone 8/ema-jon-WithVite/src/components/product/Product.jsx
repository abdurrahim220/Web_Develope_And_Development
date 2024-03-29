import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props);
    const { img, name, seller, ratings, price, stock } = props.product

    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h5 className='product-name'>{name}</h5>
                <p>Price : ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating : {ratings} Stars</p>
                <p>Item Available : {stock}</p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>
                Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
            
            </button>
        </div>
    );
};

export default Product;