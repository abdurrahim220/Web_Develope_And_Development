import React, { useEffect, useState } from 'react';
import SectionTitle from '../../component/SectionTitle/SectionTitle';
import MenuItem from '../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu,setMenu] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data =>{
            const popularItems = data.filter(item=> item.category === 'popular');
            setMenu(popularItems)
        })
    },[])
    return (
        <section>
            <SectionTitle subHeading={"From Our Menu"} heading={"Popular Items"}/>

            <div className='grid grid-cols-2 gap-4 my-4'>
                {
                    menu.map(item=><MenuItem key={item._id} item={item}/>)
                }
            </div>

            <button className='flex flex-col items-center btn btn-outline border-0 border-b-4'>View Full menu</button>
            
        </section>
    );
};

export default PopularMenu;