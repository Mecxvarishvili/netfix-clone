import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
    type: string,
    arr: string[],
    link: string,
    short?: boolean,
    className?: string
}

const ListSerialize = ({type, arr, link, short, className}: Props) => {
    
    const [ array, setArray ] = useState(arr)
    useEffect(() => {
        if(short) setArray((curr) =>curr.slice(0, 3))
    }, [])

    return (
        <div className={`${className} fs-xs-s9`}  >
            <span className="text-secondary">{type} </span>
            {array.map((el,i) => (
                <span key={el} >
                    <Link className="text-white text-decoration-none" to={link} >{el}</Link>
                </span>
            ))}
            {short && <span> more</span>}
        </div>
    )
};

export default ListSerialize;