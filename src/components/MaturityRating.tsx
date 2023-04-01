import React from 'react';
import Type, { MaturityType } from './types';

const MaturityRating = ({maturity, className}: {maturity: MaturityType, className?: string}) => {
    return (
        <span className={`${className} maturity-rating px-1`} >{maturity}</span>
    );
};

export default MaturityRating;