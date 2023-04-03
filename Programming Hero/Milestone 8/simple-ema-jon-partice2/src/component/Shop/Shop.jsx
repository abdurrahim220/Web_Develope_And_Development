import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('products.json').then(res => res.json()).then(data => setProduct(data));
    }, []);

    return (
        <div className='container'>
            <div className="product-container">
                <h3>Products Length : {product.length}</h3>
            </div>
            <div className="cart-container">
                <h3>Product summery</h3>
            </div>
        </div>
    );
};

export default Shop;