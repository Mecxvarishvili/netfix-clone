import React from 'react';
import { MovieData } from '../../components/types';
import Image from 'react-bootstrap/Image';
import PlayButton from '../../components/PlayButton';
import { RxCross2 } from 'react-icons/rx';

const PreviewBanner = ({data}: {data: MovieData}) => {
    return (
        <div className="banner-cont position-relative" >
            <Image className="w-100" alt={data.name} src={data.img[0]}/>
            <div className="position-absolute bottom-0 start-0" >
                <PlayButton />

            </div>
            <div className='position-absolute top-0 end-0 m-3 bg-primary rounded rounded-circle' >
                <RxCross2 className="fs-xs-15 fs-md-175 m-1" />
                
            </div>
        </div>
    );
};

export default PreviewBanner;