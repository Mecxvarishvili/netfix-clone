import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import page from '../../pages/page';
import Image from "react-bootstrap/Image"
import NavBar from './NavBar';
import SearchBar from './SearchBar';

const MainHeader = () => {
    const [ navBar, setNavBar ] = useState<boolean>(false)

    return (
        <div className='header px-s py-2 py-md-3 position-fixed w-100 start-0 top-0' >
            <NavBar isOpen={navBar} />
            <div className="d-flex justify-content-between" >
                <div className='d-md-flex' >
                    <Image className='navigation-menu d-md-none' onClick={() =>setNavBar((curr) => !curr)} src="https://assets.nflxext.com/ffe/siteui/akira/fallback/hamburger.gif"/>
                    <Link className="browse-link"  to={page.BROWSE}>
                        <Image className="netflix-logo" src={require("../../images/netflixlogo.png")} />
                    </Link>
                    <span className="d-none d-md-flex g-3" >
                        <Link className="text-white text-decoration-none d-inline-flex align-items-center" to={page.BROWSE + page.GENRE.replace(":genre", "tv shows")} >TV shows</Link>
                        <Link className="text-white text-decoration-none d-inline-flex align-items-center" to={page.BROWSE + page.GENRE.replace(":genre", "movies")} > Movies</Link>
                    </span>
                </div>
                <div className="d-flex" >
                    <SearchBar />
                    <div className='d-none d-md-flex text-white' >
                        <Image src="https://occ-0-5515-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABceskA5x4J8tPPGrpbl0pasEOd1RwF7PDjvIOR8P4dwIayVvD10tmC-G5nXC23smU6-H4onhbt8prP1twBC6dQuN-p4DcNg.png?r=02d" />
                        <span>name</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;