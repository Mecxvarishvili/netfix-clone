import React from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
const SearchNotFound = ({search}: {search: string | null}) => {
    return (
        <Container className='text-white' >
            <div className='mb-2 fs-xs-125'>Your search for "{search}" did not have any matches.</div>
            <div className="mb-2 fs-xs-125" >Suggenstions:</div>
            <ul className="fs-xs-1" >
                <li>Try different keywords</li>
                <li>Looking for a movie or TV show?</li>
                <li>Try using a movie, TV show title, an actor or director</li>
                <li>Try a genre, like comedy, romantic, sports, or drama</li>
            </ul>
        </Container>
    );
};

export default SearchNotFound;