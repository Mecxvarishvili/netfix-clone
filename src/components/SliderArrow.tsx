import React from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'

interface Props  {
    direction?: string,
    className?: string,
    style?: object,
    onClick?: React.MouseEventHandler<HTMLSpanElement>,
}

const SliderArrow = ({ className, style, onClick, direction }: Props) => {
    return (
        <div className={className+" slider-arrow  text-white fs-1"} style={{...style}} onClick={onClick}>
            {direction === "right" ?
            <MdArrowForwardIos className=""   /> :
            <MdArrowBackIos />
            }
        </div>
    );
};

export default SliderArrow;