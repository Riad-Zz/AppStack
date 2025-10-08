import React from 'react';
import downloadIcn from '../../assets/smallDownload.svg'
import starIcon from '../../assets/smallRating.svg'


const InstallAppCard = ({app,handleUnistall}) => {
    return (
        <div className='bg-white rounded-xl p-4 mb-4'>
            <div className='flex flex-col md:flex-row gap-3 justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <div>
                        <img src={app.image} alt="" className='w-[80px] h-[80px] rounded-xl object-cover' />
                    </div>
                    <div>
                        <p className='text-[#001931] font-semibold text-xl mb-2'>{app.title}</p>
                        <div className='flex gap-4 flex-wrap'>
                            <div className='flex gap-2'><img src={downloadIcn} alt="" /><p className='text-[#00D390]'>{app.downloads}</p></div>
                            <div className='flex gap-2'><img src={starIcon} alt="" /><p className='text-[#FF8811]'>{app.ratingAvg}</p></div>
                            <div className='text-[#627382]'>{app.size}MB</div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <button  onClick={() => handleUnistall(app.id)} className='bg-[#00D390] text-white  py-3 px-14  md:px-4  rounded-lg cursor-pointer '>Uninstall</button>
                </div>
            </div>
        </div>

    );
};

export default InstallAppCard;