import React, { useEffect, useRef, useState } from 'react';
import { Image } from 'react-bootstrap';
import { useAppDispatch } from '../store/hooks';
import { setFocusCard } from '../store/focusCard/focusCardSlice';
import { MovieData } from './types';

interface Props {
    data: MovieData
}

const SliderCard = ({data}: Props) => {
    const contRef = useRef<HTMLDivElement | any >(null)
    const dispatch = useAppDispatch()
    const [ isSelected, setIsSelected ] = useState(false)

    const dispatchHandler = async() => {
        setIsSelected(true)
        const { top, left, right, width, height} = contRef.current.getBoundingClientRect();
        const scroll = window.pageYOffset
        if(window.innerWidth >= 1200) {
            if(true) {
                dispatch(setFocusCard({data, rect: {top: top + scroll, left, right, width, height}, isFocused: true}))
            }
        }
    }
    
    return (
        <div ref={contRef} className="slider-card" onMouseEnter={dispatchHandler} onMouseLeave={() => setIsSelected(false)} >
            <Image src={data.img[0]} />
        </div>
    );
};

export default SliderCard;