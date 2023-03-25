import React, { useEffect, useState } from 'react';
import HomeHeader from '../../layout/header/BrowseHeader';
import Loader from '../../components/Loader';
import MoviesSlider from '../../components/MoviesSlider';
import BrowseFooter from './BrowseFooter';
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
    
    const items: string[] = ["Audio Description", "Help Center", "Gift Cards", "Media Center", "Investor Relations", "Jobs", "Terms of Use", "Privacy", "Legal Notices", "Cookie Preferences", "Corporate Information", "Contact Us"]
    return (
        <Loader isLoading={isLoading} >
            <HomeHeader />
            <div className='bw-page' >
                <BrowseBanner data={data[Math.floor(Math.random() * data.length)]} />
                <MoviesSlider data={data}/>
                <MoviesSlider data={data}/>
                <MoviesSlider data={data}/>
                <SliderFocusedCard />
                <BrowseFooter items={items} />
            </div>
        </Loader>
    );
};

export default BrowsePage;