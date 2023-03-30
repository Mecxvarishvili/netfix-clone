import React, { useEffect, useState } from 'react';
import { MovieData } from '../../components/types';
import { Link } from 'react-router-dom';

const PreviewFooter = ({data}: {data: MovieData}) => {
    interface Props {
        type: string,
        arr: string[],
        link: string,
        short?: boolean
    }
    function SerializeTags ({type, arr, link, short}: Props) {
        const [ array, setArray ] = useState(arr)
        useEffect(() => {
            if(short) setArray((curr) =>curr.slice(0, 2))
        }, [])
        return (
            <div>
                <span>{type} </span>
                {array.map((el,i) => (
                    <span key={el} >
                        <Link className="text-white" to={link} >{el}</Link>
                    </span>
                ))}
                {short && <span>short</span>}
            </div>
        )
    }
    return (
        <div>
            <div>About <span>{data.name}</span></div>
            <SerializeTags type="Creators:" arr={data.creator} link="?browse/ss" short={true} />
            <SerializeTags type="Cast:" arr={data.cast} link="?browse/ss" />
            <SerializeTags type="Genre:" arr={data.genre} link="?browse/ss" />
            <SerializeTags type="This show is:" arr={data.category} link="?browse/ss" />
        </div>
    );
};

export default PreviewFooter;