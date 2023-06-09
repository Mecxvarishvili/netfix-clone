import React, { useState } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { getFocusCard } from '../../../store/selector';
import PreviewBanner from './PreviewBanner';
import MiniModalContainer from './MiniModalContainer';
import DetailModalContainer from './DetailModalContainer';
const MoviePreviewModal = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true)
    const { data, rect, isFocused } = useAppSelector(getFocusCard)
    return (
        data ?
        <div className={`movie-preview w-100 min-vh-100 position-absolute top-0 start-0 d-flex justify-content-center ${isOpen ? "detail-modal":""}`}>
            <div className='bg-primary movie-preview-cont text-white rounded rounded-2 overflow-hidden my-4 mx-2 mx-sm-3' style={{maxWidth: "900px"}} >
                <PreviewBanner data={data} />
                <MiniModalContainer data={data} />
                <DetailModalContainer data={data} />
            </div>
        </div> 
        : <></>
    );
};

export default MoviePreviewModal;