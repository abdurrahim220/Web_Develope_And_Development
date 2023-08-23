import React, { useEffect, useState } from 'react';
import SectionTitle from '../../component/SectionTitle/SectionTitle';
import MenuItem from '../Shared/MenuItem/MenuItem';
import useMenu from '../../hooks/useMenu';
import { Link } from 'react-router-dom';

const PopularMenu = () => {
    // const [menu, setMenu] = useState([]);

    const [menu] = useMenu();

    const popular = menu.filter(item => item.category === 'popular')

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data);
    //             const popularItems = data.filter(item => item.category === 'popular')
    //             setMenu(popularItems)
    //         })
    // }, []);
    return (
        <section className='my-7'>
           
            <SectionTitle 
            heading="From Our Menu"
            subHeading="Popular Item"
            >
            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-2'>
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
           <Link className='flex justify-center'> <button className='btn text-center btn-outline border-0 border-b-4 mt-4'>View Full menu</button></Link>
        </section>
    );
};

export default PopularMenu;