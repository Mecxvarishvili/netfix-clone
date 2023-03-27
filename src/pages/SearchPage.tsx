import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import API from '../serialize/api';
import MovieCard from '../components/MovieCard';
import { MovieData } from '../components/types';
import { Col, Container, Row } from 'react-bootstrap';

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const [ isLoading, setIsLoading ] = useState<boolean>(true)
    const [ data, setData ] = useState<MovieData[]>()

    useEffect(()  =>  {
        API.fetchMovieSearch(searchParams.get("q") as string)
            .then(res => {
                setData(res)
                setIsLoading(false)
            })

    }, [searchParams])
    return (
        <div className="search-page min-vh-100 px-s">
            {data &&<>
                <div className="text-secondary fw-bold fs-xs-125" >Results for '{searchParams.get("q")}'</div>
                <Row className="m-0 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-5 row-cols-xxl-6" >
                    {data.map(data => (
                        <Col className="px-0" key={data.id}>
                            <MovieCard data={data}/>
                        </Col>
                    ))}
                </Row>
            </>
            }
        </div> 
    );
};

export default SearchPage;