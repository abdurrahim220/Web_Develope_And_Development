import React from 'react';
import MenuItem from '../../page/Shared/MenuItem/MenuItem';
import Cover from '../../page/Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div>
            {
                title && <Cover img={coverImg} title={title}></Cover>
            }
            <div className='grid md:grid-cols-2 gap-10 my-10'>
                {
                    items.map(item => <MenuItem
                        key={item._id} item={item}
                    ></MenuItem>)
                }

            </div>
            <Link className='flex justify-center mb-3' to={`/order/${title}`}> <button className='text-center items-center btn btn-outline border-0 border-b-4 mt-4'>Order Now</button></Link>
        </div>
    );
};

export default MenuCategory;