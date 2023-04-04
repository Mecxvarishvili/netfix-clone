import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import MoviesSlider from '../../layout/slider/MoviesSlider';
import BrowseBanner from './BrowseBanner';
import MovieCardFocus from '../../components/MovieCardFocus';
import { Router, useParams } from 'react-router-dom';
import API from '../../serialize/api';
import MoviePreview from '../../layout/preview/MoviePreview';

const BrowsePage = () => {
    const [ data, setData ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    const { genre } = useParams()

    const fetchData  = async () => {
        let data
        if(genre) {
             data = await API.fetchMovieGenre(genre)

        } else {
             data = await API.fetchMovies()
        }
        return data
    }

    useEffect(() => {
        fetchData()
            .then((data) => {
                setData(data)
                setIsLoading(false)
            })
    }, [genre])
    
    return (
        <div className='bw-page min-vh-100' >
            {/* <Loader isLoading={isLoading} >
                <BrowseBanner data={data[Math.floor(Math.random() * data.length)]} />
                <MoviesSlider data={data}/>
                <MoviesSlider data={data}/>
                <MoviesSlider data={data}/>
                <MovieCardFocus />
                <MoviePreview />
            </Loader> */}
            <Router>
                
            </Router>
        </div>
    );
};

export default BrowsePage;