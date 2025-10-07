import React from 'react';
import ErrorImage from '../../assets/App-Error.png'
import { Link, useNavigate } from 'react-router';

const NoAppFound = () => {
    const navigate  = useNavigate() ;
    return (
        <div className='mt-10 col-span-4 max-w-full mx-auto text-center'>
            <img src={ErrorImage} alt="No App Found Message"  className='object-cover relative md:left-16'/>
            <p className='text-[#001931] font-bold text-5xl my-4'>OPPS!! APP NOT FOUND</p>
            <p className='text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>
            <div className='flex justify-center'>
                
                    <button onClick={() => navigate(-1)} className='bg-linear-to-r from-[#632EE3] to-[#9F62F2]  text-white py-3 px-6 rounded-md my-7 font-bold cursor-pointer'>Go Back</button>
                
            </div>
        </div>
    );
};

export default NoAppFound;