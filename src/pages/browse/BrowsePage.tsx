import React, { useEffect, useState } from 'react';
import HomeHeader from '../../layout/header/MainHeader';
import Loader from '../../components/Loader';
import MoviesSlider from '../../components/MoviesSlider';
import BrowseBanner from './BrowseBanner';
import MovieCardFocus from '../../components/MovieCardFocus';
import { Route, Routes, useParams } from 'react-router-dom';
import API from '../../serialize/api';
import page from '../page';
import MoviePreview from '../../layout/preview/MoviePreview';
import ReactPlayer from 'react-player';

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
                <MovieCardFocus />
                <MoviePreview />
                //https://imdb-video.media-imdb.com/vi338798873/1434659607842-pgv4ql-1616202355944.mp4?Expires=1680525010&Signature=f4LfuEJoYQAZATMvcctLGdgpvzq16n~ho7jyKE9R61aprCVYp0zY59IeXHT1nzz5kUGIyS2fPHnTpkNKraPFXIiwOhVHhmWiN51tgx915VrTTVxyPqJ~2q~co-RAaLtbyhF~wJmmsmSUplwwkM57i4ac8kvlA40VAaJfYfRqySgf43uo812~L4Q4GUOFESZmMy8lb-m0i6aytKRneh3SnjsWMnjN3~EbhdeCUsWLrPvXTHJK1aiJM~3xiahKEksb6ITuTfvErmCuq7bTon4YANKk3hcScTntvP6Yv4JWT1AHh7zFzyzN2VQTNYO9iK-UJz976jTL4m~hOFDhtmjcaA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA
            </Loader>
        </div>
    );
};

export default BrowsePage;