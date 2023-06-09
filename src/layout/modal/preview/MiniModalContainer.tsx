import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { getFocusCard } from '../../../store/selector';
import { Image } from 'react-bootstrap';
import { disableFocusCard } from '../../../store/focusCard/focusCardSlice';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { MovieData } from '../../../components/types';

interface Props {
    data: MovieData
}

const MiniModalContainer = ({data}: Props) => {
    return (
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
    );
};

export default MiniModalContainer;