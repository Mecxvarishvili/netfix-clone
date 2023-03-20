import React, { useRef } from 'react';
import { Image } from 'react-bootstrap';
import { useAppDispatch } from '../store/hooks';
import { setFocusCard } from '../store/focusCard/focusCardSlice';
import { MovieData } from './types';

interface Props {
    data: MovieData/*{ 
        img: string[]
    } */
}

const SliderCard = ({data}: Props) => {
    const ref = useRef<HTMLDivElement | any >(null)
    const dispatch = useAppDispatch()
    const dispatchHandler = () => {
        const position = ref.current.getBoundingClientRect();
        dispatch(setFocusCard({data: data, rect: {top: position.top, left: position.left, width: position.width}}))
    }
    return (
        <div ref={ref} className="slider-card" onMouseEnter={dispatchHandler} >
            <Image src={data.img[0]} />
        </div>
    );
};

export default SliderCard;