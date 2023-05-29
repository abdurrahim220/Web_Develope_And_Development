import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../page/Shared/NavBar/NavBar';
import Footer from '../page/Shared/Footer/Footer';

const Main = () => {
    const location = useLocation()
    // console.log(location);
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp')
    return (
        <div>
           {noHeaderFooter ||  <NavBar />}
            <Outlet />
           {noHeaderFooter ||  <Footer />}
        </div>
    );
};

export default Main;