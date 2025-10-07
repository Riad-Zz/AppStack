import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import { HashLoader } from 'react-spinners';

const Root = () => {
    const naviagtion = useNavigation();
    const isNavigating = naviagtion.state === "loading";
    return (
        <div className='min-h-screen bg-[#F5F5F5] text-black'>
            <Navbar></Navbar>
            {
                isNavigating && (
                    <div className='fixed inset-0 z-50 flex justify-center items-center bg-white/70 backdrop-blur-sm'><HashLoader color="#7e56b7"
                        size={70}></HashLoader></div>
                )
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Root;