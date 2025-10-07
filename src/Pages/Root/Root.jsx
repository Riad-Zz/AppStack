import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='min-h-screen bg-[#F5F5F5] text-black'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;