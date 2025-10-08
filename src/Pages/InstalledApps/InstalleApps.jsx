import React, { useEffect, useState } from 'react';
import InstallAppCard from './InstallAppCard';
import { useLoaderData, useOutletContext } from 'react-router';
import { getInstalled } from '../../Utils/Utils';

const InstalleApps = () => {
    const allApp = useLoaderData() ;
    // console.log(allApp);
    const {allInstalled,setAllInstalled} = useOutletContext() ; 

    useEffect(()=>{
        const installedApps = getInstalled() ;
        const convertedApps = installedApps.map(id=>parseInt(id)) ;
        const finalApps = allApp.filter(app => convertedApps.includes(app.id)) ;
        // console.log(finalApps) ; 
        setAllInstalled(finalApps) ;
    },[])

    return (
        <div>
            <div className='mt-14 max-w-10/12 mx-auto'>
            <p className='text-[#001931] font-bold text-5xl text-center'>Your Installed Apps</p>
            <p className='text-[#627382] text-center my-4'>Explore All Trending Apps on the Market developed by us</p>
            <div className='flex justify-between mb-4'>
                <p className='text-[#001931] font-semibold text-2xl'>{allInstalled.length} Apps Found</p>
                <div>
                    <select defaultValue="Sort By Download" className="select bg-[#F5F5F5] border border-[#D2D2D2]">
                        <option disabled={true}>Sort by Download</option>
                        <option>Sort by download</option>
                        <option>Low to High</option>
                        <option>High to Low</option>
                    </select>
                </div>
            </div>
            {/* <InstalledAppsCard></InstalledAppsCard>
            <InstalledAppsCard></InstalledAppsCard> */}
            {
                // allInstalled.map(app => <InstalledAppsCard key={app.id} app={app}></InstalledAppsCard>)
                allInstalled.map(app => <InstallAppCard key={app.id} app={app}></InstallAppCard>)
            }
            {/* <InstallAppCard></InstallAppCard>
            <InstallAppCard></InstallAppCard> */}

        </div>
        </div>
    );
};

export default InstalleApps;