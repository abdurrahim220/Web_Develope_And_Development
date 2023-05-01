import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(result => { })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signUp">Sign Up</Link>
                {
                user && <span className='text-white'>Welcome {user.email} <button className='btn btn-warning' onClick={handleSignOut}>Sign Out</button></span>
                }
            </div>
        </nav>
    );
};

export default Header;