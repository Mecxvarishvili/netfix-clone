import React from 'react';
import { Image } from 'react-bootstrap';

interface Props {
    data: {
        img: string[]
    }
}
const SliderCard = ({data}: Props) => {
    return (
        <div className="slider-card" >
            <Image src={data.img[1]} />
        </div>
    );
};

export default SliderCard;