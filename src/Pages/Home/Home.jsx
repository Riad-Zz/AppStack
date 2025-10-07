import React from 'react';
import Banner from '../../Components/Banner/Banner';
import InfoState from '../../Components/InfoState/InfoState';
import HomeCards from '../../Components/HomeCards/HomeCards';
import ViewAllBtn from '../../Components/ViewAllBtn/ViewAllBtn';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoState></InfoState>
            <HomeCards></HomeCards>
            <ViewAllBtn></ViewAllBtn>
            
        </div>
    );
};

export default Home;