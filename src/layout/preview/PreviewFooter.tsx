import React, { useEffect, useState } from 'react';
import { MovieData } from '../../components/types';
import ListSerialize from './ListSerialize';
import MaturityRating from '../../components/MaturityRating';
import page from '../../pages/page';

const PreviewFooter = ({data}: {data: MovieData}) => {
    return (
        <div>
            <div className="fs-xs-15 mt-5 mb-4" >About <span className="fw-medium" >{data.name}</span></div>
            <ListSerialize className='py-1' type="Creators:" arr={data.creator} link={page.LINK_MODAL.replace(":type", "person")} />
            <ListSerialize className='py-1' type="Cast:" arr={data.cast} link={page.MODAL.replace(":type", "person")} />
            <ListSerialize className='py-1' type="Genre:" arr={data.genre} link={page.MODAL.replace(":type", "genre")} />
            <ListSerialize className='py-1' type="This show is:" arr={data.category} link={page.MODAL.replace(":type", "genre")}  />
            <div className="d-flex align-items-center" >
                <span className="text-secondary fs-xs-s9 me-2" >Maturity Rating: </span>
                <MaturityRating className="fs-xs-s9" maturity={data.pegi} />
            </div>
        </div>
    );
};

export default PreviewFooter;