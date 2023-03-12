import React, { useEffect, useState } from 'react';
import HomeHeader from '../../layout/header/BrowseHeader';
import BrowseImage from './BrowseImage';
import Loader from '../../components/Loader';
import MoviesCarousel from '../../components/MoviesCarousel';

const BrowsePage = () => {
    const [ data, setData ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    const fetchData  = async () => {
        const data = await fetch("http://localhost:8000/nf/")
        return data.json()
    }

    useEffect(() => {
        fetchData()
            .then((data) => {
                setData(data)
                setIsLoading(false)
            })
    }, [])
    return (
        <Loader isLoading={isLoading} >
            <HomeHeader />
            <div className='bw-page' >
                <BrowseImage data={data[Math.floor(Math.random() * data.length)]} />
                <MoviesCarousel data={data}/>
            </div>
        </Loader>
    );
};

export default BrowsePage;