import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Welcome to my React Js</h1>
            <nav>
                <a href="/home">Home</a><a href="./shop">Shop</a><a href="./aboutus">About Us</a>
            </nav>
        </div>
    );
};

export default Header;