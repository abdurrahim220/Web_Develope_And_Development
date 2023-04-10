import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShit/TShirt';
import Cart from '../Cart/Cart';
import './Home.css';
import toast from 'react-hot-toast';


const Home = () => {
    const tshirts = useLoaderData();
    const [cart,setCart] = useState([]);

    const handleAddToCart = tshirt =>{

        const exists = cart.find(ts=> ts._id === tshirt._id);
        if(exists)
        {
            toast('You have Already Added This !!!!');
        }
        else{
            const newCart = [...cart,tshirt];
            setCart(newCart)
        }

       
    };
    const handleRemoveFormCart = id =>{
        const remaining = cart.filter(ts=> ts._id !== id)

        setCart(remaining)
    }
    return (
        <div className='home-container'>
            <div className="t-shirts-container">
                {
                    tshirts.map(tshirt => <TShirt
                        key={tshirt._id} tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                handleRemoveFormCart={handleRemoveFormCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;