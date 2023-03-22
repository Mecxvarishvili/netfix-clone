import React, { useEffect, useRef, useState } from 'react';
import { Image } from 'react-bootstrap';
import { useAppDispatch } from '../store/hooks';
import { setFocusCard } from '../store/focusCard/focusCardSlice';
import { MovieData } from './types';

interface Props {
    data: MovieData
}

const SliderCard = ({data}: Props) => {
    const [ isSelected, setIsSelected ] = useState<any>(false)
    const dispatch = useAppDispatch()
    const contRef = useRef<HTMLDivElement>(null!)

    const dispatchHandler = async() => {
        const { top, left, right, width, height} = contRef.current.getBoundingClientRect();
        const scroll = window.pageYOffset
        if(window.innerWidth >= 1200) {
            if(true) {
                dispatch(setFocusCard({data, rect: {top: top + scroll, left, right: window.innerWidth - right , width, height}, isFocused: true}))
            }
        }
    }
    

    function handleMouseEnter () {
        setIsSelected(setTimeout(() => {
            dispatchHandler()
        }, 1000))
    }

    function handleMouseLeave () {
        if(isSelected) {
            clearTimeout(isSelected)
        }
    }
    
    return (
        <div ref={contRef} className="slider-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Image src={data.img[0]} />
        </div>
    );
};

export default SliderCard;