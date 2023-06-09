import React from 'react';
import PreviewMain from './PreviewMain';
import SimilarMovies from './SimilarMovies';
import PreviewFooter from './PreviewFooter';
import { MovieData } from '../../../components/types';

interface Props {
    data: MovieData
}
const DetailModalContainer = ({data}: Props) => {
    return (
                
        <div className="px-5" >
            <PreviewMain data={data} />
            <SimilarMovies />
            <PreviewFooter data={data} />
        </div>
    );
};

export default DetailModalContainer;