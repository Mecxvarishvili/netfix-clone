import React, { useEffect, useState } from 'react';
import API from '../../../serialize/api';
import { MovieData } from '../../../components/types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SimilarMovieListCard from './SimilarMovieListCard';

const SimilarMovies = () => {
    const [data, setData] = useState<MovieData[]>()
    const [ isLoading, setIsLoading ] = useState<boolean>(true)
    useEffect(() => {
        try {
        API.fetchMovies()
        .then(data => {
            setData(data)
            setIsLoading(false)
        })
        } catch (err) {
            setIsLoading(false)
            console.log(err)
        }
    }, [])
    return (
        data ?<div className="">
            <div className="fs-xs-15 fw-medium mb-4" >More Like This</div>
            <Row className="row-cols-2 row-cols-md-3 g-3 " >
                {data.map(data => (
                    <SimilarMovieListCard key={data.id} data={data} />
                ))}
            </Row>
        </div> 
        : <></>
    );
};

export default SimilarMovies;