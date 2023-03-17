import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import {GrPlayFill } from 'react-icons/gr';

interface Props {
    data: {
        img: string[],
        describe: string,
        pegi: string
    }
}
const BrowseImage = ({data}: Props) => {
    return (
        <div className="d-none d-xl-block position-relative text-white banner-container" >
            <Image className="w-100 position-absolute" style={{zIndex: "-1"}}  src={data.img[1]} />
            <div className='px-s h-100 w-100 d-flex align-items-end'>
                <div className='describe-box mb-5' >
                    <div>
                        <Image className='w-100'  src={data.img[2]} />
                    </div>
                    <div>{data.describe}</div>
                    <div className='d-flex' >
                        
                        <Button className="px-4 me-3 fs-xs-15 bg-white text-black fw-medium d-flex align-items-center" > <GrPlayFill /> &nbsp;<span>Play</span></Button>
                        <Button className="px-4 fs-xs-15 fw-medium bg-tertiary d-flex align-items-center" ><AiOutlineInfoCircle /> &nbsp;<span> More Info</span></Button>
                    </div>
                </div>
            </div>
            <div className="maturity-cont position-absolute end-0 bottom-0 mb-5 ps-3 py-1 fs-xs-1125 border-start border-3" >{data.pegi}</div>
        </div>
    );
};

export default BrowseImage;