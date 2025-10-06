import React from 'react';

import { Outlet } from 'react-router';
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Header/Navbar';
const Root = () => {
    return (
        <div className='max-w-6xl mx-auto' >
           <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;