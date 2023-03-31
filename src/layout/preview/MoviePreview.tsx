import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import API from '../../serialize/api';
import { MovieData } from '../../components/types';
import PreviewBanner from './PreviewBanner';
import PreviewFooter from './PreviewFooter';
import ListSerialize from './ListSerialize';

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
        <div className="movie-preview-cont w-100 min-vh-100 position-absolute top-0 start-0 d-flex justify-content-center">
            <div className='bg-primary text-white rounded rounded-2 overflow-hidden' style={{maxWidth: "900px"}} >
                <PreviewBanner data={data} />
                <div className="px-5" >
                    <div className="d-flex justify-content-between gx-3" >
                        <div>
                            <div className="my-4" >
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
                            <ListSerialize className="my-3"  type="Cast:" arr={data.cast} link="?browse/ss" short={true} />
                            <ListSerialize className="my-3"  type="Genre:" arr={data.genre} link="?browse/ss" />
                            <ListSerialize className="my-3"  type="This show is:" arr={data.category} link="?browse/ss"  />
                        </div>
                    </div>
                    <PreviewFooter data={data} />
                </div>
            </div>
        </div> 
        : <></>
    );
};

export default MoviePreview;