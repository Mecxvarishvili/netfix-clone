import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getFocusCard } from '../store/selector';
import { Image } from 'react-bootstrap';
import { disableFocusCard } from '../store/focusCard/focusCardSlice';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

interface Location {
    top?: number,
    left?: number, 
    right?: number,
    width?: number,
    opacity?: number
}

interface StyleProps {
    top?: number,
    left?: number,
    right?: number,
    width?: number,
    opacity?: number,
    transform?: string
}

const MovieCardFocus = () => {
    const {data, rect, isFocused} = useAppSelector(getFocusCard)
    const dispatch = useAppDispatch()
    const ref = useRef<HTMLDivElement | any >(null)

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [ location, setLocation ] = useState<Location | undefined>()
    const [ styleProps, setStyleProps ] = useState<StyleProps | undefined>({opacity: 0})
    const [ style, setStyle ] = useState<{transform: string} | undefined>(undefined)

    function handleLocation () {
    }
   

    function handleCard () {
        if(rect && data && ref.current) {
            const thisRect = ref.current.getBoundingClientRect()
            if(rect.left <= 60) {
                console.log((thisRect.height-rect.height) / 2)
                setStyleProps({top: rect.top - ((thisRect.height-rect.height) / 2), left: 60, width: rect.width*1.5, opacity: 1, transform: `translateX(-${(thisRect.height - rect.height) / 4}px) translateY(${(thisRect.height - rect.height) / 4}px) scaleX(${rect.width / thisRect.width}) scaleY(${rect.width / thisRect.width})`})
                setTimeout(() => {
                    setStyleProps({top: rect.top - ((thisRect.height-rect.height) / 2), left: 60, width: rect.width*1.5, opacity: 1})
                    
                }, 104540);
                // setLocation({top: rect.top - ((thisRect.height-rect.height) / 2), left: 60, width: rect.width*1.5, opacity: 1})
            }

            if(rect.right < 100) {
                // setLocation({top: rect.top - ((thisRect.height-rect.height) / 2), right: 60, width: rect.width*1.5})
            }
            if(60 < rect.left && rect.right > 100) {
                setStyleProps({top: rect.top - ((thisRect.height-rect.height) / 2), left: rect.left - (rect.width / 4), width: rect.width*1.5, opacity: 0, transform: `translateY(${(thisRect.height - rect.height) / 4}px) scaleX(${rect.width / thisRect.width}) scaleY(${rect.width / thisRect.width})`})
                setTimeout(() => {
                    console.log("work")
                    setStyleProps({top: rect.top - ((thisRect.height-rect.height) / 2), left: rect.left - (rect.width / 4), width: rect.width*1.5, opacity: 1})
                }, 300)
            }

        }
    }

    useEffect(() => {
        handleCard()
    }, [data])

    const handleFocusDisable = () => {
        setTimeout(() => {
            dispatch(disableFocusCard())
            setStyleProps({opacity: 0})
            setLocation(undefined)
        }, 500)
    }

    //disable focus on widnow width
    useEffect(() => {
        if(isFocused) {
            window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    
            return () => {
              window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
            };
        }
    });

    useEffect(() => {
        if(isFocused) {
            handleFocusDisable()
        }
    }, [windowWidth])


    return (
        data && rect ?
        <div ref={ref} className="slider-focused-card-cont position-absolute rounded rounded-2 bg-primary text-white overflow-hidden" style={{width: rect.width*1.5, ...location, ...styleProps}} onMouseLeave={handleFocusDisable}  >
            <div>
                <Image alt={data.name} src={data.img[0]} className='w-100' /> 

            </div>
            <div>
                <Link to="">
                    <div className="p-3">
                        <div className="text-white d-flex justify-content-between mb-2" >
                            <span className="border border-2 rounded rounded-circle border-white" >
                                <FaPlay />
                            </span>
                            <span className="border border-2 rounded rounded-circle border-white" >
                                <IoIosArrowDown className='' />
                            </span>
                        </div>
                        <div className="my-3 text-white" >
                            <div>{data.match}% Match</div>
                            <div>
                                <span className="border border-1 border-white" >{data.pegi}</span>
                                <span>{data.time}</span>
                            </div>
                        </div>
                        <div className="text-white mb-2 d-flex">
                            {data.category.map((el, i) => (
                                <div  key={el}>
                                    {i > 0 &&<span className="pe-1">&#x2022;</span>}
                                    <span>{el} </span>
                                </div>
                                    
                            ))}
                        </div>
                    </div>
                </Link>
            </div>
        </div> : <></>
    );
};

export default MovieCardFocus;