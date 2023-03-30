import React from 'react';
import { MovieData } from '../../components/types';
import Image from 'react-bootstrap/Image';

const PreviewBanner = ({data}: {data: MovieData}) => {
    return (
        <div>
            <Image className="w-100" alt={data.name} src={data.img[0]}/>
            
        </div>
    );
};

export default PreviewBanner;