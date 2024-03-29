import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navOption = <>

        <li><Link to='menu'>Menu</Link></li>
        <li><Link to='order/salad'>Order</Link></li>
        <li><Link to="login">Login</Link></li>

    </>
    return (
        <>
            <div class="navbar fixed z-10 text-white opacity-30 max-w-screen-xl bg-black">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOption}
                        </ul>
                    </div>
                    <Link to='/' class="btn btn-ghost normal-case text-xl">Bistro Boss</Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                <div class="navbar-end">
                    <a class="btn">Get Started</a>
                </div>
            </div>

        </>
    );
};

export default Navbar;