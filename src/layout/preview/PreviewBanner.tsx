import React from 'react';
import { MovieData } from '../../components/types';
import Image from 'react-bootstrap/Image';
import PlayButton from '../../components/PlayButton';

const PreviewBanner = ({data}: {data: MovieData}) => {
    return (
        <div className="banner-cont position-relative" >
            <Image className="w-100" alt={data.name} src={data.img[0]}/>
            <div className="position-absolute bottom-0 start-0" >
                <PlayButton />
            </div>
        </div>
    );
};

export default PreviewBanner;