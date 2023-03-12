import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

interface Props {
    data: {
        img: string[],
        describe: string
    }
}
const BrowseImage = ({data}: Props) => {
    return (
        <div className="d-none d-xl-block position-relative" >
            <Image className="w-100 position-absolute" style={{zIndex: "-1"}}  src={data.img[1]} />
            <div style={{width: "36%"}}>
                <div >
                    <Image className='w-100'  src={data.img[2]} />
                </div>
                <div>{data.describe}</div>
                <div>
                    <Button>Play</Button>
                    <Button>More Info</Button>
                </div>
            </div>
        </div>
    );
};

export default BrowseImage;