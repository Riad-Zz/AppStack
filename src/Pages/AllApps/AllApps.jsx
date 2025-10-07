import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AllAppCard from './AllAppCard';
import NoAppFound from '../../Components/NoAppFound/NoAppFound';
import { HashLoader } from 'react-spinners';

const AllApps = () => {
    const initialallData = useLoaderData();
    // console.log(allData) ; 
    const [allData, setAllData] = useState(initialallData);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const searchedValue = e.target.value.toLowerCase();
        setLoading(true);

        setTimeout(() => { 
            const filteredData = initialallData.filter(data => data.title.toLowerCase().includes(searchedValue));
            setAllData(filteredData);
            setLoading(false);
        }, 200);

        // console.log(searchedValue) ;


    }

    return (
        <div className='mt-14'>
            <p className='text-[#001931] font-bold text-5xl text-center'>Our All Applications</p>
            <p className='text-[#627382] text-center my-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='max-w-10/12 mx-auto flex flex-col md:flex-row gap-3.5 md:gap-0 justify-between mt-7'>

                <p className='text-[#001931] font-bold text-xl'>({allData.length}) Apps Found</p>

                <label className="input bg-[#F5F5F5] border border-[#D2D2D2]">
                    <svg className="h-[1em] opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input onChange={handleChange} type="search" required placeholder="Search Apps" />
                </label>

            </div>

            {loading && (
                <div className="fixed inset-0 z-50 flex justify-center items-center bg-white/50 backdrop-blur-sm">
                    <HashLoader color="#7e56b7" size={60} />
                </div>
            )}

            <div className='max-w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6'>
                {
                    (allData.length == 0) ? <NoAppFound></NoAppFound> : allData.map(app => <AllAppCard app={app}></AllAppCard>)
                }
            </div>
        </div>
    );
};

export default AllApps;