import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div >
                <a href="shop">shop</a>
                <a href="about">about</a>
                <a href="contact us">contact us</a>
                <a href="rahim">rahim</a>
            </div>

        </nav>
    );
};

export default Header;