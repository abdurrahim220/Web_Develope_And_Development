import React, { useEffect, useState } from 'react';
import SectionTitle from '../../component/SectionTitle/SectionTitle';
import MenuItem from '../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState();
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems)
            })
    }, [])
    return (
        <section className='my-7'>
            <SectionTitle>
                heading="From Our Menu"
                subHeading="Popular Item"
            </SectionTitle>
            {/* <div className='grid md:grid-cols-2 gap-2'>
                {
                 menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div> */}
        </section>
    );
};

export default PopularMenu;