import React from 'react';
import { Link, useNavigate } from 'react-router';
import ErrorImage from '../../assets/error-404.png'

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className='min-h-screen bg-white '>
            <div className='pt-10 flex flex-col items-center justify-center max-w-11/12 mx-auto'>
                <div className='flex justify-center'>
                    <img src={ErrorImage} alt="No App Found Message"  />
                </div>
                <div>
                    <p className='text-[#001931] font-bold text-5xl my-4 text-center'>OPPS!! APP NOT FOUND</p>
                <p className='text-[#627382] text-center'>The App you are requesting is not found on our system.  please try another apps</p>
                <div className='flex justify-center'>

                    <button onClick={() => navigate(-1)} className='bg-linear-to-r from-[#632EE3] to-[#9F62F2]  text-white py-3 px-6 rounded-md my-7 font-bold cursor-pointer'>Go Back</button>

                </div>
                </div>
                
            </div>
        </div>
    );
};

export default ErrorPage;