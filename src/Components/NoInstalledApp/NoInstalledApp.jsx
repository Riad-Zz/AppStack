import React from 'react';
import ErrorImage from '../../assets/App-Error.png'
import { Link, useNavigate } from 'react-router';

const NoInstalledApp = () => {
    const navigate = useNavigate();
    return (
        <div className='mt-14 max-w-full mx-auto text-center flex flex-col items-center justify-center'>
            <div>
                <img src={ErrorImage} alt="No App Found Message" className='object-cover' />
            </div>
            <div>
                <p className='text-[#001931] font-bold text-5xl my-5'>OPPS!! NO INSTALLED APP FOUND</p>
                <p className='text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>
                <div className='flex justify-center'>

                    <button onClick={() => navigate(-1)} className='bg-linear-to-r from-[#632EE3] to-[#9F62F2]  text-white py-3 px-6 rounded-md my-7 font-bold cursor-pointer'>Go Back</button>

                </div>
            </div>

        </div>
    );
};

export default NoInstalledApp;