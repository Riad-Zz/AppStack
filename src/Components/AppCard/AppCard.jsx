import React from 'react';
import downloadIcon from '../../assets/icon-downloads.png'
import ratingIcon from '../../assets/icon-ratings.png'
import { Link } from 'react-router';

const AppCard = ({ app }) => {
    return (
        <Link to={`/details/${app.title}`}>
            <div className='rounded-xl p-4 bg-white cursor-pointer'>
                <div className='flex justify-center'>
                    <img src={app.image} alt="App Icon" className='rounded-xl w-full object-cover' />
                </div>
                <p className='text-[#001931] my-4'>{app.title}</p>
                <div className='flex justify-between items-center'>
                    <div className='bg-[#F1F5E8] flex items-center gap-2 px-3 py-[6px] rounded-md'>
                        <img src={downloadIcon} alt="" className='w-4 h-4' />
                        <p className='text-[#00D390]'>{app.downloads}</p>
                    </div>
                    <div className='bg-[#FFF0E1] flex items-center gap-2 px-3 py-[6px] rounded-md'>
                        <img src={ratingIcon} alt="" className='w-4 h-4' />
                        <p className='text-[#FF8811]'>{app.ratingAvg}</p>
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default AppCard;