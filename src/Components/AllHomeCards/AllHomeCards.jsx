import React, { use } from 'react';
import AppCard from '../AppCard/AppCard';

const AllHomeCards = ({appPromise}) => {
    const allApp = use(appPromise) ;
    // console.log(allApp) ;
    return (
        <div>
            <div className='max-w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {/* <AppCard></AppCard>
                <AppCard></AppCard>
                <AppCard></AppCard>
                <AppCard></AppCard> */}
                {
                    allApp.map(app => <AppCard key={app.id} app={app}></AppCard>)
                }
                
            </div>
        </div>
    );
};

export default AllHomeCards;