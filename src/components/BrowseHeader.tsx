import React from 'react';
import {  Link } from 'react-router-dom';
import Form from 'react-bootstrap/esm/Form';
import page from '../pages/page';
import Image from "react-bootstrap/Image"

const BrowseHeader = () => {
    return (
        <div className='header px-3 px-md-4 px-xl-5 py-2 position-fixed w-100' >
            <div className="d-flex justify-content-between px-1 px-xxl-3" >
                <div>
                    <Link to={page.BROWSE}>
                        <Image className='header-logo' src={require("../images/Logonetflix.png")} />
                    </Link>
                </div>
                <Form>
                    <Form.Control className="search-input bg-black rounded-0 px-2 py-1 text-white"  placeholder="Titles, people, genre"/>

                </Form>
            </div>
        </div>
    );
};

export default BrowseHeader;