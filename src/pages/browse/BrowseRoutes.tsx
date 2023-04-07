import React, { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import page from '../page';
import ModalPage from '../modal/ModalPage';
import BrowsePage from './BrowsePage';
import ProfileSelect from './ProfileSelect';

const BrowseRoutes = () => {
    return (
        false ?
        <div>
            <Routes>
                <Route path={page.MODAL} element={<ModalPage />} />
            </Routes>
            <BrowsePage />
        </div>
        : <ProfileSelect />
    );
};

export default memo(BrowseRoutes);