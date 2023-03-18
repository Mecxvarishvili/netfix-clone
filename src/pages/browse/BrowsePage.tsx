import React, { useEffect, useState } from 'react';
import HomeHeader from '../../layout/header/BrowseHeader';
import Loader from '../../components/Loader';
import MoviesSlider from '../../components/MoviesSlider';
import BrowseFooter from './BrowseFooter';
import BrowseBanner from './BrowseBanner';

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
    const items: string[] = ["Audio Description", "Help Center", "Gift Cards", "Media Center", "Investor Relations", "Jobs", "Terms of Use", "Privacy", "Legal Notices", "Cookie Preferences", "Corporate Information", "Contact Us"]
    console.log(items.length)
    return (
        <Loader isLoading={isLoading} >
            <HomeHeader />
            <div className='bw-page' >
                <BrowseBanner data={data[Math.floor(Math.random() * data.length)]} />
                <MoviesSlider data={data}/>
                <MoviesSlider data={data}/>
                <MoviesSlider data={data}/>
                <BrowseFooter items={items} />
            </div>
        </Loader>
    );
};

export default BrowsePage;