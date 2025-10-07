import React, { Suspense } from 'react';
import AllHomeCards from '../AllHomeCards/AllHomeCards';
import { Link } from 'react-router';

const HomeCards = () => {
    const appPromise = fetch('/trendingCard.json').then(res => res.json());

    return (
        <div className='mt-14'>
            <p className='font-bold text-4xl text-center'>Trending Apps</p>
            <p className='text-[#627382] text-center mt-4 mb-7'>Explore All Trending Apps on the Market developed by us</p>
            <Suspense fallback={<div>Loading.....</div>}>
                <AllHomeCards appPromise={appPromise} ></AllHomeCards>
            </Suspense>
        </div>
    );
};

export default HomeCards;