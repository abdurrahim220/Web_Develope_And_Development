import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className='my-10'>
            {title && <Cover img={img} title={title}></Cover>}
            <div className='grid grid-cols-2 gap-4 my-4'>
                {
                    items.map(item => <MenuItem key={item._id} item={item} />)
                }
            </div>
            <Link className='flex justify-center' to={`/order/${title}`}><button className='btn btn-outline '>Order Now</button></Link>
        </div>
    );
};

export default MenuCategory;