import React from 'react';

const InfoState = () => {
    return (
        <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-10'>
            <p className='text-white font-semibold text-5xl text-center'>Trusted by Millions, Built for You</p>
            <div className='text-white flex flex-col md:flex-row justify-center my-10 gap-10 lg:gap-36'>
                <div className='flex flex-col justify-center items-center border rounded-xl py-5 md:px-8 text-center bg-white/10 backdrop-blur-md  shadow-md'>
                    <p className='text-[16px] font-light'>Total Download</p>
                    <p className='font-bold text-6xl my-4'>29.6M</p>
                    <p className='text-[16px] font-light'>21% More Than Last Year</p>
                </div>
                <div className='flex flex-col justify-center items-center border rounded-xl py-5 md:px-8 text-center bg-white/10 backdrop-blur-md  shadow-md'>
                    <p className='text-[16px] font-light'>Total Reviews</p>
                    <p className='font-bold text-6xl my-4'>906K</p>
                    <p className='text-[16px] font-light'>46% more than last month</p>
                </div>
                <div className='flex flex-col justify-center items-center border rounded-xl py-5 md:px-10 text-center  lg::px-14 bg-white/10 backdrop-blur-md  shadow-md '>
                    <p className='text-[16px] font-light'>Active Apps</p>
                    <p className='font-bold text-6xl my-4'>132+</p>
                    <p className='text-[16px] font-light'>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default InfoState;