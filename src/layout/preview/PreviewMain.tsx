import React from 'react';
import { MovieData } from '../../components/types';
import ListSerialize from './ListSerialize';
import MatchScore from '../../components/MatchScore';
import MaturityRating from '../../components/MaturityRating';
import page from '../../pages/page';

const PreviewMain = ({data}: {data: MovieData}) => {
    return (
        <div className="d-flex justify-content-between gx-3 fs-xs-s9 mb-5" >
            <div>
                <div className="my-4" >
                    <div className='d-flex my-2 fs-xs-1'>
                        <MatchScore match={data.match} />
                        <div>{data.release}</div>
                        <div>{data.time}</div>
                    </div>
                    <div className='d-flex'>
                        <MaturityRating className='lh-1' maturity={data.pegi} />
                    </div>
                </div>
                <div>{data.describe}</div>
            </div>
            <div>
                <ListSerialize className="my-3"  type="Cast:" arr={data.cast} link={page.MODAL.replace(":type", "person")} short={true} />
                <ListSerialize className="my-3"  type="Genre:" arr={data.genre} link={page.MODAL.replace(":type", "genre")} />
                <ListSerialize className="my-3"  type="This show is:" arr={data.category} link={page.MODAL.replace(":type", "genre")} />
            </div>
        </div>
    );
};

export default PreviewMain;