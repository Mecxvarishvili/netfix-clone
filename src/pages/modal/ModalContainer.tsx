import React from 'react';
import { MovieData } from '../../components/types';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import MovieCard from '../../components/MovieCard';
import { BsArrowLeft } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';

interface Props {
    data: MovieData[],
    id: string
}
const ModalContainer = ({data, id}: Props) => {
    return (
        <div className="person-layout position-absolute start-0 top-0 w-100 h-100 " >
            <div className='person-layout-cont mx-auto min-vh-100 mt-4 position-relative rounded-3'>
                <div>
                    <div className="text-white py-5" >
                        <div className='position-absolute top-0 start-0 lh-1 fs-xs-175 p-2 m-3' onClick={() => console.log("click")} >
                            <BsArrowLeft />
                        </div>
                        {data.length ? <div className='fs-xs-3125 text-white text-center fw-bolder'>{id}</div> : <></>}
                        <div className='position-absolute top-0 end-0 lh-1 fs-xs-175 p-2 m-3'>
                            <RxCross2 />
                        </div>
                    </div>
                    <div>
                        { data.length ?
                        <Row className="row-cols-4 row-cols-xxl-5">
                            {data.map(data => (
                                <Col key={data.id}>
                                    <MovieCard data={data} />
                                </Col>
                            ))}
                        </Row>
                        : <div className='py-5 text-center text-muted' >No matching titles found.</div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalContainer;