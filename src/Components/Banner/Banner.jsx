import React from 'react';
import playStoreIcn from '../../assets/PlayStore.svg'
import appStoreIcn from '../../assets/AppStore.svg'
import heroIcon from '../../assets/hero.png'
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='text-center mt-14'>
            <p className=' text-[#001931] text-7xl font-bold'>We Build</p>
            <p className='text-[#001931] text-7xl font-bold mb-4'><span className='text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Productive</span> Apps</p>
            <p className='text-[#627382] mb-8 max-w-[799px] mx-auto'>At AppStack, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex justify-center mb-4 gap-4'>
                <Link to="https://play.google.com/store/games?hl=en">
                    <div className='flex items-center gap-3 border border-[#D2D2D2] rounded-lg py-3 px-6 cursor-pointer'>
                        <img src={playStoreIcn} alt="Play Store Icon" />
                        <p className='font-bold'>Google Play</p>
                    </div>
                </Link>
                <Link to= "https://www.apple.com/app-store/">
                    <div className='flex items-center gap-3 border border-[#D2D2D2] rounded-lg py-3 px-6 cursor-pointer'>

                        <img src={appStoreIcn} alt="App Store Icn" />
                        <p className='font-bold'>App Store</p>

                    </div>
                </Link>



            </div>
            <div className='flex justify-center'>
                <img src={heroIcon} alt="Banner Image" />
            </div>
        </div>
    );
};

export default Banner;