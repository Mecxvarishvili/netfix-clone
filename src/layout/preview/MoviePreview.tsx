import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import API from '../../serialize/api';
import { MovieData } from '../../components/types';
import PreviewBanner from './PreviewBanner';
import PreviewFooter from './PreviewFooter';
import PreviewMain from './PreviewMain';
import SimilarMovies from './SimilarMovies';
import page from '../../pages/page';

const MoviePreview = () => {
    const [searchParams] = useSearchParams()
    const [ data, setData ] = useState<MovieData>()
    const navigate = useNavigate()
    const location = useLocation()

    console.log(searchParams.get("jbv"))
    const jbv = searchParams.get("jbv")
    
    useEffect(() => {
        API.fetchSingleMovie(searchParams.get("jbv"))
            .then(data => {
                setData(data)
            })
    }, [location.search])

    useEffect(() => {
        if(jbv) {
            navigate(page.TITLE.replace(":id", jbv))
            console.log(jbv)
        }
    }, [])

    return (
        searchParams.get("jbv") && data ?
        <div className="movie-preview w-100 min-vh-100 position-absolute top-0 start-0 d-flex justify-content-center">
            <div className='bg-primary movie-preview-cont text-white rounded rounded-2 overflow-hidden my-4 mx-2 mx-sm-3' style={{maxWidth: "900px"}} >
                <PreviewBanner data={data} />
                <div className="px-5" >
                    <PreviewMain data={data} />
                    <SimilarMovies />
                    <PreviewFooter data={data} />
                </div>
            </div>
        </div> 
        : <></>
    );
};

export default MoviePreview;