import React, { useEffect, useState } from 'react';
import HomeHeader from '../../layout/header/MainHeader';
import Loader from '../../components/Loader';
import MoviesSlider from '../../components/MoviesSlider';
import BrowseBanner from './BrowseBanner';
import SliderFocusedCard from '../../components/SliderFocusedCard';
import { useParams } from 'react-router-dom';
import API from '../../serialize/api';

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
            <Loader isLoading={isLoading} >
                <BrowseBanner data={data[Math.floor(Math.random() * data.length)]} />
                <MoviesSlider data={data}/>
                <MoviesSlider data={data}/>
                <MoviesSlider data={data}/>
                <SliderFocusedCard />
            </Loader>
        </div>
    );
};

export default BrowsePage;