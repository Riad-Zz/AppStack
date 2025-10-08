import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import { HashLoader } from 'react-spinners';
import Footer from '../../Components/Footer/Footer';
import { ToastContainer} from 'react-toastify';

const Root = () => {
    const naviagtion = useNavigation();
    const isNavigating = naviagtion.state === "loading";
    const [allInstalled,setAllInstalled] =useState([]) ;
    return (
        <div className='min-h-screen bg-[#F5F5F5] text-black'>
            <Navbar></Navbar>
            {
                isNavigating && (
                    <div className='fixed inset-0 z-50 flex justify-center items-center bg-white/70 backdrop-blur-sm'><HashLoader color="#7e56b7"
                        size={70}></HashLoader></div>
                )
            }
            <Outlet context={{allInstalled,setAllInstalled}}></Outlet>
            <Footer></Footer>
             <ToastContainer />
        </div>
    );
};

export default Root;