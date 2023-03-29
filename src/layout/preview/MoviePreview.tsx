import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import API from '../../serialize/api';
import { Image } from 'react-bootstrap';
import { MovieData } from '../../components/types';

const MoviePreview = () => {
    const [searchParams] = useSearchParams()
    const [ data, setData ] = useState<MovieData>()
    console.log(searchParams.get("jbv"))
    
    useEffect(() => {
        API.fetchSingleMovie(searchParams.get("jbv"))
            .then(data => {
                setData(data)
            })
    }, [])

    return (
        searchParams.get("jbv") && data ?
        <div className="movie-preview-cont w-100 min-vh-100 position-absolute top-0 start-0">
            <div className='bg-primary text-white' style={{width: "1000px"}} >
                <Image className="w-100 h-100" alt={data.name} src={data.img[0]}/>
                <div className="" >
                    <div>
                        <div>
                            <div className='d-flex'>
                                <div>{data.match}% Match</div>
                                <div>{data.release}</div>
                                <div>{data.time}</div>
                            </div>
                            <div className='d-flex'>
                                <div>{data.pegi}</div>
                                <div>category</div>
                            </div>
                        </div>
                        <div>{data.describe}</div>
                    </div>
                    <div>
                        <div>
                            <span>Cast: </span>
                            {data.cast.map((el, i) => {
                                 if(i < 3) return <span key={el} >{el}, </span>
                            })}
                            <span>more</span>
                        </div>
                        <div>
                            <span>Genre :</span>
                            {data.genre.map(genre => (
                                <span key={genre} >{genre}, </span>
                            ))}
                        </div>
                        <div>
                            <span>This show is: </span>
                            {data.category.map(category => (
                                <span key={category} >{category}, </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        : <></>
    );
};

export default MoviePreview;