import React, { useEffect, useState } from 'react';
import { MovieData } from '../../components/types';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import MovieCard from '../../components/MovieCard';
import { BsArrowLeft } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';
import { useParams } from 'react-router-dom';
import API from '../../serialize/api';
import ModalContainer from './ModalContainer';


const ModalPage = () => {
    const { type, id } = useParams()
    const [ data, setData ] = useState<MovieData[]>()
    
    useEffect(() => {
        if(type === "genre") {

            API.fetchMovieGenre(id as string)
                .then(data => {
                    setData(data)
                })
        } else if(type === "person") {
            API.fetchPersonMovies(id as string)
                .then(data => {
                    setData(data)
                })
        }
    }, [])
    return (
        data && id ? <ModalContainer data={data} id={id} /> : <></>
    );
};

export default ModalPage;