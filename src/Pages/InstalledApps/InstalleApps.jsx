import React, { useEffect, useState } from 'react';
import InstallAppCard from './InstallAppCard';
import { useLoaderData, useOutletContext } from 'react-router';
import { getInstalled, removedInstalled } from '../../Utils/Utils';
import { toast } from 'react-toastify';
import NoInstalledApp from '../../Components/NoInstalledApp/NoInstalledApp';

const InstalleApps = () => {
    const allApp = useLoaderData();
    // console.log(allApp);

    function parseDownloads(downloadStr) {
        if (typeof downloadStr !== "string") return 0;

        const num = parseFloat(downloadStr);

        if (downloadStr.toLowerCase().includes("m")) {
            return num * 1_000_000;
        } else if (downloadStr.toLowerCase().includes("k")) {
            return num * 1_000;
        } else {
            return num; 
        }
    }

    const { allInstalled, setAllInstalled } = useOutletContext();

    const [sort, setSort] = useState("");

    const handleSort = (type) => {
        setSort(type);
        if (type === "low") {
            const sortedlowtohigh = [...allInstalled].sort((a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads)) ;
            setAllInstalled(sortedlowtohigh) ;
        }
        if(type === "high"){
            const sortedhightolow = [...allInstalled].sort((a,b) => parseDownloads(b.downloads) - parseDownloads(a.downloads))
            setAllInstalled(sortedhightolow) ;
        }
    }

    useEffect(() => {
        const installedApps = getInstalled();
        const convertedApps = installedApps.map(id => parseInt(id));
        const finalApps = allApp.filter(app => convertedApps.includes(app.id));
        // console.log(finalApps) ; 
        setAllInstalled(finalApps);
    }, [])

    const handleUnistall = (id) => {
        console.log("Fromm Parent ! " ,id) ; 
        removedInstalled(id) ; 
        const installedApps = getInstalled();
         const convertedApps = installedApps.map(id => parseInt(id));
        const finalApps = allApp.filter(app => convertedApps.includes(app.id));
        // console.log(finalApps) ; 
        setAllInstalled(finalApps);
        toast(`App Uninstalled !`) ;
    }

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
                            <option onClick={()=>handleSort("low")}>Low to High</option>
                            <option onClick={()=>handleSort("high")} >High to Low</option>
                        </select>
                    </div>
                </div>
                {/* <InstalledAppsCard></InstalledAppsCard>
            <InstalledAppsCard></InstalledAppsCard> */}
                {
                    // allInstalled.map(app => <InstalledAppsCard key={app.id} app={app}></InstalledAppsCard>)
                    (allInstalled.length ===0)? <NoInstalledApp></NoInstalledApp> : allInstalled.map(app => <InstallAppCard key={app.id} app={app} handleUnistall={handleUnistall}></InstallAppCard>)
                }
                {/* <InstallAppCard></InstallAppCard>
            <InstallAppCard></InstallAppCard> */}

            </div>
        </div>
    );
};

export default InstalleApps;