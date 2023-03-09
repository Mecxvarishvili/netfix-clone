import React from 'react';
import HomeHeader from '../components/BrowseHeader';
import BrowseImage from '../components/BrowseImage';
import BrowseContainer from '../components/BrowseContainer';

const BrowsePage = () => {
    return (
        <div className='bw-page' >
            <HomeHeader />
            <BrowseImage />
            <BrowseContainer />
        </div>
    );
};

export default BrowsePage;