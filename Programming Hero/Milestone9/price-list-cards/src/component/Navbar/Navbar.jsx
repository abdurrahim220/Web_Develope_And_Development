import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {


    const [open, setOpen] = useState(false);
    const routers = [
        { name: 'Home', id: 1, path: '/home' },
        { name: 'About', id: 2, path: '/about' },
        { name: 'Services', id: 3, path: '/services' },
        { name: 'Contact', id: 4, path: '/contact' },
        { name: 'Blog', id: 5, path: '/blog' }
    ];

    return (
        <nav className='bg-purple-400 px-4'>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>{open === true ? <Bars3Icon className="h-6 w-6 text-blue-500" /> : <XMarkIcon className="h-6 w-6 text-blue-500" />}</span>


            </div>
            <ul className={`md:flex absolute md:static duration-500  ${open? 'top-6' : '-top-36'} bg-purple-400 pl-7 pb-7`}>
                {
                    routers.map(router => <Link key={router.id} router={router}></Link>)
                }
            </ul>

        </nav>
    );
};

export default Navbar;