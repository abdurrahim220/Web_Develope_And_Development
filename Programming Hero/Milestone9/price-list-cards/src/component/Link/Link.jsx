import React from 'react';

const Link = ({router}) => {
    return (
        <li className='mr-12 hover:bg-purple-500'>
            <a href={router.path}>{router.name}</a>
        </li>
    );
};

export default Link;