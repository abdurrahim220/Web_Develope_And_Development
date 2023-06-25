import React from 'react';
import Categories from '../../component/Categories/Categories';
import Rooms from '../../component/Rooms/Classes';
import { Helmet } from 'react-helmet-async';

const Classes = () => {
    return (
        <div >
             <Helmet>
                <title>Drawing School-Classes</title>
            </Helmet>
            <Categories></Categories>
            <Rooms></Rooms>
        </div>
    );
};

export default Classes;