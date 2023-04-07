import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to="/">home</Link>
            <Link to="/contact">contact</Link>
            <Link to="/about">about</Link>
        </nav>
    );
};

export default Header;