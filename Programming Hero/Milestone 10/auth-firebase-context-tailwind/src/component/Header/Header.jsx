import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const {user,logOut}= useContext(AuthContext)
    const handleLogOut = () =>{
        logOut()
        .then(()=>{

        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/orders">Orders</Link>
               { user && <Link className="btn btn-ghost normal-case text-xl" to="/profile">Profile</Link>}
                <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
                {
                    user ? <> <p>{user.email}</p> 
                     <button onClick={handleLogOut} className='btn btn-xs'>Sign Out</button></> :
                    <Link to='/login'> <button className='btn btn-xs'>Log In</button></Link>
                    
                }
            </div>
        </div>
    );
};

export default Header;