import React, { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import page from '../page';
import ModalPage from '../../layout/modal/ModalPage';
import BrowsePage from './BrowsePage';
import ProfileSelectPage from './ProfileSelectPage';

const BrowseRoutes = () => {
    return (
        true ?
        <div>
            <Routes>
                {/* <Route path={page.MODAL} element={<ModalPage />} /> change and remove */}

            </Routes>
            <BrowsePage />
        </div>
        : <ProfileSelectPage />
    );
};

export default memo(BrowseRoutes);