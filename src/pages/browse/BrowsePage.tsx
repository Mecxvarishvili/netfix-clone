import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import MoviesSlider from '../../layout/slider/MoviesSlider';
import BrowseBanner from './BrowseBanner';
import MovieCardFocus from '../../components/MovieCardFocus';
import { useParams } from 'react-router-dom';
import API from '../../serialize/api';
import SliderLoader from '../../components/SliderLoader';
import MoviePreviewModal from '../../layout/modal/preview/MoviePreviewModal';

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
            <SliderLoader isLoading={isLoading} >
                <BrowseBanner data={data[1]} />
                <MoviesSlider data={data}/>
                <MoviesSlider data={data}/>
                <MoviesSlider data={data}/>
                {/* <MovieCardFocus /> change and remove */}
                <MoviePreviewModal />
            </SliderLoader>
        </div>
    );
};

export default BrowsePage;