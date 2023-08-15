import React, { useState } from 'react'

import order from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../component/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'offered', 'dessert']
    const [menu] = useMenu();
    const { category } = useParams();
    console.log(category)
    const initialIndex = categories.indexOf(category);
    

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const desert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Order</title>
            </Helmet>
            <Cover title="OrderFood" img={order} />
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>offered</Tab>
                    <Tab>Desert</Tab>

                </TabList>
                <TabPanel>
                    <OrderTab items={salad} />
                </TabPanel>
                <TabPanel><OrderTab items={pizza} /></TabPanel>
                <TabPanel><OrderTab items={soup} /></TabPanel>
                <TabPanel><OrderTab items={offered} /></TabPanel>
                <TabPanel><OrderTab items={desert} /></TabPanel>
            </Tabs>
        </div>
    )
}

export default Order