import React, { useEffect, useState } from 'react';
import API from '../../serialize/api';
import { useNavigate, useParams } from 'react-router-dom';
import page from '../../pages/page';
import { MovieData } from '../../components/types';
import ModalPage from './ModalPage';

const PersonMoviesModal = () => {
    const [ data, setData ] = useState<MovieData[]>()
    const navigate = useNavigate()
    const {id}= useParams()

    useEffect(() => {
        if(window.innerWidth > 1200) {
            if(id) API.fetchPersonMovies(id)
                .then(data => {
                    setData(data)
                })

        } else {
            navigate(page.BROWSE)
        }
    }, [])

    return (
        data ? <ModalPage data={data} /> : <></>
    );
};

export default PersonMoviesModal;