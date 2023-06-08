import React, { useRef, useState } from 'react';
import { Col, Image } from 'react-bootstrap';
import { useAppDispatch } from '../store/hooks';
import { setFocusCard } from '../store/focusCard/focusCardSlice';
import { MovieData } from './types';
import { useSearchParams } from 'react-router-dom';

interface Props {
    data: MovieData,
    className?: string,
}

const MovieCard = ({data}: Props) => {
    const [ isSelected, setIsSelected ] = useState<any>(false)
    const dispatch = useAppDispatch()
    const contRef = useRef<HTMLDivElement>(null!)
    const [ searchParams, setSearchParams ] = useSearchParams()

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
    function handleClick () {
        /* const q = searchParams.get("q")
        console.log(q)
        if(q) {
            setSearchParams({q, jbv: data.id})
        } else {
            setSearchParams({jbv: data.id})
        } */
        searchParams.set("jbv", data.id)
        setSearchParams(searchParams)

    }

    
    return (
        <Col>
            <div ref={contRef} className="movie-card cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} >
                <Image className="w-100 h-100" src={data.img[0]} />
            </div>
        </Col>
    );
};

export default MovieCard;