import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadIcon from '../../assets/icon-downloads.png'
import ratingIcon from '../../assets/icon-ratings.png'
import reviewIcon from '../../assets/icon-review.png'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { getInfo, setInstalled } from '../../Utils/Utils';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router';




const AppDetails = () => {
    const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
    const allAppData = useLoaderData();
    const titles = useParams().title;
    const navigate = useNavigate();
    // console.log(typeof titles) ;
    // console.log(allAppData) ;
    const currentCard = allAppData.find(data => data.title === titles);
    // console.log(currentCard);
    const graphData = currentCard.ratings;
    // console.log(graphData) ;

    const [check, setCheck] = useState(() => getInfo(currentCard.id));

    const handleClick = async (id) => {
        setInstalled(id);
        toast.promise(
            resolveAfter3Sec,
            {
                pending: 'Installing . Please Wait ...',
                success: `${currentCard.title} is Installed`,

            },
            {
                theme: 'colored',
            }
        )
        await resolveAfter3Sec;
        setCheck(true);
    }

    return (
        <div className='max-w-10/12 mx-auto'>
            {/* App Details  */}
            <div className='mt-10 flex flex-col md:flex-row  items-center gap-10'>
                <div>
                    <img src={currentCard.image} alt="App Logo" className='rounded-xl w-[256px] h-[256px]' />
                </div>
                <div className='flex-1'>
                    <p className='text-[#001931] font-bold text-3xl mb-1'>{currentCard.title}</p>
                    <p className='text-[#001931]'>Developed by <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>{currentCard.companyName}</span> </p>
                    <hr className='my-5 border-t border-gray-300' />
                    <div className='flex items-center my-10 gap-8 md:gap-14 '>
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
                    <div onClick={() => handleClick(currentCard.id)} className='flex justify-center md:justify-start' ><button disabled={check} className='bg-[#00D390] text-white px-7 py-4 rounded-lg font-bold cursor-pointer'> {check ? "Installed" : `Install Now (${currentCard.size} MB)`}</button></div>

                </div>
            </div>
            <hr className="my-7 border-t border-gray-300" />
            {/* ReChart  */}
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={graphData} layout="vertical">
                    <YAxis dataKey="name" stroke="#627382" type="category" />
                    <XAxis type="number" stroke="#627382" />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="count" fill="#FF8811" barSize={30} />
                </BarChart>
            </ResponsiveContainer>
            <hr className="my-7 border-t border-gray-300" />
            <p className='text-[Description] font-bold text-2xl mb-3'>Description</p>
            <p className='text-[#627382] text-xl mb-10'>{currentCard.description}</p>
            <div className='flex justify-center'>

                <button onClick={() => navigate(-1)} className='bg-linear-to-r from-[#632EE3] to-[#9F62F2]  text-white py-3 px-6 rounded-md my-7 font-bold cursor-pointer'>Go Back</button>

            </div>

        </div>

    );
};

export default AppDetails;