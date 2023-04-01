import React from 'react';
import { MatchType } from './types';

const MatchScore = ({className, match}: {className?: string, match: MatchType}) => {
    return (
        <div className={`${className} match-score fw-medium`} >{match}% Match</div>
    );
};

export default MatchScore;