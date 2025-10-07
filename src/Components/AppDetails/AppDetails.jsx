import React from 'react';
import { useLoaderData, useParams } from 'react-router';

import downloadIcon from '../../assets/icon-downloads.png'
import ratingIcon from '../../assets/icon-ratings.png'
import reviewIcon from '../../assets/icon-review.png'
const AppDetails = () => {
    const allAppData = useLoaderData();
    const titles = useParams().title;
    // console.log(typeof titles) ;
    // console.log(allAppData) ;
    const currentCard = allAppData.find(data => data.title === titles);
    console.log(currentCard);
    return (
        <div className='max-w-10/12 mx-auto'>
            <div className='mt-10 flex flex-col md:flex-row  items-center gap-10'>
                <div>
                    <img src={currentCard.image} alt="App Logo" className='rounded-xl w-[256px] h-[256px]' />
                </div>
                <div className='flex-1'>
                    <p className='text-[#001931] font-bold text-3xl mb-1'>{currentCard.title}</p>
                    <p className='text-[#001931]'>Developed by <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>{currentCard.companyName}</span> </p>
                    <hr className='my-5 border-t border-gray-300' />
                    <div className='flex  my-10 gap-14 '>
                        <div className='flex flex-col justify-center items-center   text-center'>
                            <img src={downloadIcon} alt="" />
                            <p className='text-[#001931] text-[16px] font-light'>Download</p>
                            <p className='font-bold text-[#001931] text-4xl'>{currentCard.downloads}</p>
                        </div>
                        <div className='flex flex-col justify-center items-center    text-center'>
                            <img src={ratingIcon} alt="" />
                            <p className='text-[#001931] text-[16px] font-light'>Average Rating</p>
                            <p className='font-bold text-[#001931] text-4xl'>{currentCard.ratingAvg}</p>
                        </div>
                        <div className='flex flex-col justify-center items-center  text-center '>
                            <img src={reviewIcon} alt="" />
                            <p className='text-[#001931] text-[16px] font-light'>Total Reviews</p>
                            <p className='font-bold text-[#001931] text-4xl'>{currentCard.reviews}</p>
                        </div>
                    </div>
                    <div className='flex justify-center md:justify-start' ><button className='bg-[#00D390] text-white px-7 py-4 rounded-lg font-bold'>Install Now ({currentCard.size}MB)</button></div>

                </div>
            </div>
            <hr className="my-7 border-t border-gray-300" />
        </div>

    );
};

export default AppDetails;