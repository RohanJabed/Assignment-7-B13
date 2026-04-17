import React from 'react';
import Navbar from '../Component/Shared/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
             <Outlet></Outlet>
             <Footer></Footer>
        </div>
    );
};

export default MainLayout;