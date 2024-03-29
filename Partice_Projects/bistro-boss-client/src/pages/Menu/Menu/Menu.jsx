import React from 'react'
import { Helmet } from 'react-helmet-async'
import Cover from '../../Shared/Cover/Cover';

import menuImg from '../../../assets/menu/banner3.jpg'
import desertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'

import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {

    const [menu] = useMenu();
    const desert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const offered = menu.filter(item => item.category === 'offered');


    return (
        <div>

            <Helmet>
                <title>Bistro Boss || Menu</title>

            </Helmet>
            {/* main cover */}
            <Cover img={menuImg} title="our menu" />
            <SectionTitle subHeading="Don't miss" heading="Todays Offer"></SectionTitle>
            {/* offered menu item */}
            <MenuCategory items={offered} />
            {/* desert */}
            <MenuCategory items={desert} title="desert" img={desertImg} />
            <MenuCategory items={pizza} title="pizza" img={pizzaImg}/>
            <MenuCategory items={soup} title="soup" img={soupImg}/>
            <MenuCategory items={salad} title="salad" img={saladImg}/>
           

        </div>
    )
}

export default Menu