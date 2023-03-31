import React, { useEffect, useState } from 'react';
import { MovieData } from '../../components/types';
import { Link } from 'react-router-dom';
import ListSerialize from './ListSerialize';

const PreviewFooter = ({data}: {data: MovieData}) => {
    return (
        <div>
            <div>About <span>{data.name}</span></div>
            <ListSerialize type="Creators:" arr={data.creator} link="?browse/ss" />
            <ListSerialize type="Cast:" arr={data.cast} link="?browse/ss" short={true} />
            <ListSerialize type="Genre:" arr={data.genre} link="?browse/ss" />
            <ListSerialize type="This show is:" arr={data.category} link="?browse/ss"  />
        </div>
    );
};

export default PreviewFooter;