import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props);
    const { img, name, seller, ratings, price, stock } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h5 className='product-name'>{name}</h5>
                <p>Price : ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating : {ratings} Stars</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;