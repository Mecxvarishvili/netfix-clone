import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="not-found-page text-white vh-100" >
            <header className="bg-black py-3 px-5" >
                <Link to="/">
                    <Image className="logo my-1" alt="logo" src={require("../images/netflixlogo.png")}/>
                </Link>
            </header>
            <div className='position-absolute top-0 left-0 w-100 h-100' style={{zIndex: -1}}>
                <Image className="w-100 h-100 object-fit-cover" alt="lost in space" src="https://assets.nflxext.com/ffe/siteui/pages/errors/bg-lost-in-space.png" />
                <div className="position-absolute end-0 bottom-0 px-3 py-2 px-sm-5 py-sm-3 py-lg-4 fw-lighter font-13">FROM <strong className="text-secondary" >LOST IN SPACE</strong></div>
            </div>
            <div className="h-25"></div>
            <div className="content-shadow position-relative  text-center h-50 d-flex flex-column" >
                <div className="text-center fs-xs-2 fs-sm-3125 fs-xl-4 fw-medium mb-2" >Lost your Way?</div>
                <div className="w-50 mx-auto flex-grow-1  d-flex flex-column" >
                    <div className="fs-xs-1 fs-md-12 fs-xl-15 fs-xxl-1625 mb-3 fw-light" >Sorry, we can't find that page. You'll find lots to explore on the home page. </div>
                    <Link to="/">
                        <Button className="bg-white text-black border-0 fs-xs-s8 fs-xl-1 fw-medium px-3 px-xl-4 py-sm-2 py-1 rounded-1" >Netflix Home</Button>
                    </Link>
                    <div className=" d-flex justify-content-center align-items-end  flex-grow-1  pb-3" >
                        <div className="border-start border-2 border-danger px-1 fw-lighter fs-xs-s8  fs-sm-12 py-1 fs-xl-15 fs-xxl-175 py-md-2 px-sm-2" >Error Code <span className="fw-medium" >NSES-404</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;