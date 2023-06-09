import React from 'react';
import { MovieData } from '../../../components/types';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import MatchScore from '../../../components/MatchScore';
import MaturityRating from '../../../components/MaturityRating';

interface Props {
    data: MovieData
}
const SimilarMovieListCard = ({data}: Props) => {
    return (
        <Col>
            <div className="rounded rounded-1 overflow-hidden  " style={{background: "#2f2f2f"}}>
                <Image className="w-100 h-100"  src={data.img[0]} />
                <div className="p-3">
                    <div className="d-flex justify-content-between align-items-center pb-3">
                        <div >
                            <MatchScore match={data.match} />
                            <div>
                                <MaturityRating className="me-2" maturity={data.pegi} />
                                <span>{data.release}</span>
                            </div>
                        </div>
                        <div>add to list</div>
                    </div>
                    <div className="fs-xs-s9" style={{color: "#d2d2d2"}}>{data.describe}</div>
                </div>
            </div>
        </Col>
    );
};

export default SimilarMovieListCard;