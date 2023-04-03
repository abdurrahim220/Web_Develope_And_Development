import React from 'react';
import Link from '../Link/Link';

const Navbar = () => {
    const routers = [
        { name: 'Home', id: 1, path: '/home' },
        { name: 'About', id: 2, path: '/about' },
        { name: 'Services', id: 3, path: '/services' },
        { name: 'Contact', id: 4, path: '/contact' },
        { name: 'Blog', id: 5, path: '/blog' }
    ];
    return (
        <nav>
            <ul className='md:flex'>
                {
                    routers.map(router => <Link key={router.id} router={router}></Link>)
                }
            </ul>

        </nav>
    );
};

export default Navbar;