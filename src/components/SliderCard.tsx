import React from 'react';
import { Image } from 'react-bootstrap';
import { useAppDispatch } from '../store/store';
import { setFocusCard } from '../store/focusCard/focusCardSlice';

interface Props {
    data: {
        img: string[]
    }
}
const SliderCard = ({data}: Props) => {
    const dispatch = useAppDispatch()
    const dispatchHandler = () => {
        dispatch(setFocusCard(data))
    }
    return (
        <div className="slider-card" onMouseEnter={dispatchHandler} >
            <Image src={data.img[1]} />
        </div>
    );
};

export default SliderCard;