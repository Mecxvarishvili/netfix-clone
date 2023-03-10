import React, { useEffect, useState } from 'react';
import HomeHeader from '../layout/header/BrowseHeader';
import BrowseImage from '../components/BrowseImage';
import BrowseContainer from '../components/BrowseContainer';
import Loader from '../components/Loader';

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
            <div className='bw-page' >
                <HomeHeader />
                <BrowseImage data={data[Math.floor(Math.random() * data.length)]} />
                <BrowseContainer data={data}/>
            </div>
        </Loader>
    );
};

export default BrowsePage;