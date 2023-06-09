import React, { useEffect, useState } from 'react';
import API from '../../../serialize/api';
import { useNavigate, useParams } from 'react-router-dom';
import { MovieData } from '../../../components/types';
import page from '../../../pages/page';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import MovieCard from '../../../components/MovieCard';
import { BsArrowLeft } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';

const PersonLayout = () => {
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
        <div className="person-layout position-absolute start-0 top-0 w-100 h-100 " >
            <div className='person-layout-cont mx-auto min-vh-100 mt-4 position-relative rounded-3'>
                {data && data.length ?
                <div>
                    <div className="text-white" >
                        <div className='position-absolute top-0 start-0 lh-1 fs-xs-175 p-2 m-3' onClick={() => navigate(-1)} >
                            <BsArrowLeft />
                        </div>
                        <div className='fs-xs-3125 text-white text-center py-5 fw-bolder'>{id}</div>
                        <div className='position-absolute top-0 end-0 lh-1 fs-xs-175 p-2 m-3'>
                            <RxCross2 />
                        </div>
                    </div>
                    <div>
                        <Row className="row-cols-4 row-cols-xxl-5">
                            {data.map(data => (
                                <Col key={data.id}>
                                    <MovieCard data={data} />
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
                :<div>No matching titles found.</div>
                }
            </div>
        </div>
    );
};

export default PersonLayout;