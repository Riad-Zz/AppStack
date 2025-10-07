import React from 'react';
import { Link, NavLink } from 'react-router';
import { BsGithub } from "react-icons/bs";
import icon from '../../assets/logo.png'

const Navbar = () => {

    const options = <ul className='menu menu-horizontal px-1'>
        <li><NavLink to='/' className={({ isActive }) => (isActive ? "active" : "not-active")} >Home</NavLink></li>
        <li><NavLink to='/app' className={({ isActive }) => (isActive ? "active" : "not-active")} >App</NavLink></li>
        <li><NavLink to='/m' className={({ isActive }) => (isActive ? "active" : "not-active")} >Installation</NavLink></li>
    </ul>

    return (
        <div>
            <div className="flex justify-between items-center py-3 px-2 md:px-6 bg-white shadow-sm shadow-[#E9E9E9]">
                <div className="flex items-center">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to='/' className={({ isActive }) => (isActive ? "active" : "not-active")} >Home</NavLink></li>
                            <li><NavLink to='/app' className={({ isActive }) => (isActive ? "active" : "not-active")} >App</NavLink></li>
                            <li><NavLink to='/m' className={({ isActive }) => (isActive ? "active" : "not-active")} >Installation</NavLink></li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-2 font-bold text-xl'>
                        <a href="/"><img src={icon} alt="Website Logo" className='w-10 h-10' /></a>
                        <p className='hidden md:block text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>AppStack</p>
                    </div>
                </div>
                <div className="hidden lg:flex">
                    <ul className="">
                        {options}
                    </ul>
                </div>
                <div className="">
                    <div className='flex items-center gap-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-3 px-4 rounded-md text-white font-semibold'>
                        <BsGithub />
                        <a href='https://github.com/Riad-Zz'>Contribute</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;