import React, { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import page from '../page';
import ModalPage from '../modal/ModalPage';
import BrowsePage from './BrowsePage';

const BrowseRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path={page.MODAL} element={<ModalPage />} />
            </Routes>
            <BrowsePage />
        </div>
    );
};

export default memo(BrowseRoutes);