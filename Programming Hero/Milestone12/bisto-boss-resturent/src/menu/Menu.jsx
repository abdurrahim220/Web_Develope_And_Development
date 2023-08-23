import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../page/Shared/Cover/Cover';
import menuImg from '../assets/menu/banner3.jpg'
import pizzaImg from '../assets/menu/pizza-bg.jpg'
import soupImg from '../assets/menu/soup-bg.jpg'
import saladImg from '../assets/menu/salad-bg.jpg'
import menuImg2 from '../assets/home/chef-service.jpg'
import useMenu from '../hooks/useMenu';
import SectionTitle from '../component/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    // console.log(menu)
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div >
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title='our menu'></Cover>
            {/* main cover */}
            <SectionTitle
                subHeading="Don't Miss"
                heading="Today's Offer"
            ></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>


            <MenuCategory title="dessert" coverImg={menuImg2} items={dessert}></MenuCategory>
            <MenuCategory title="pizza" coverImg={pizzaImg} items={pizza}></MenuCategory>
            <MenuCategory title="salad" coverImg={saladImg} items={salad}></MenuCategory>
            <MenuCategory title="soup" coverImg={soupImg} items={soup}></MenuCategory>

        </div>
    );
};

export default Menu;