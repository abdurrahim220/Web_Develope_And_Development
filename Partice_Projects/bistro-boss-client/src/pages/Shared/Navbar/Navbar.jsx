import React from 'react';

const Navbar = () => {
    const navOption = <>
        <li><a>Item 1</a></li>
        <li>
            <a>Parent</a>

        </li>
        <li><a>Item 3</a></li>

    </>
    return (
        <>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOption}
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl">Bistro Boss</a>
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