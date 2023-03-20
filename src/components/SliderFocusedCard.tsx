import React, { useEffect } from 'react';
import { useAppSelector } from '../store/hooks';
import { getFocusCard } from '../store/selector';
import { Image } from 'react-bootstrap';

const SliderFocusedCard = () => {
    const {data, rect} = useAppSelector(getFocusCard)
    useEffect(() => {
    }, [])
    return (
        data.id ?
        <div className="position-absolute" style={{top: rect.top, left: rect.left}}>
            <Image src={data.img[0]} /> {data.special}
        </div> : <></>
    );
};

export default SliderFocusedCard;