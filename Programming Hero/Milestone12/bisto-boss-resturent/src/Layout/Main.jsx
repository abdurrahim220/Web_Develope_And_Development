import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../page/Shared/NavBar/NavBar';
import Footer from '../page/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;