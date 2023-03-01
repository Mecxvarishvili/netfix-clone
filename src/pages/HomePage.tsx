import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from "react-bootstrap/Image"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import page from './page';
import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <div className="hm-page text-white">
            <header className="position-relative pt-4" >
                <div className="d-flex justify-content-between mx-2 mx-sm-4 mx-lg-5">
                    <Image className='menu-logo' src={require("../images/Logonetflix.png")}/>
                    <div>
                        <Link className="btn btn-danger btn-sm border-0 fs-sm-6 px-sm-3" to={page.LOGIN} >Sign In</Link>
                    </div>

                </div>
            </header>
            <div>
                <div className="position-relative py-5 px-5p">
                    <div style={{zIndex: -1, height: "500px"}} className="position-absolute top-0 start-0">
                        <Image className='w-auto h-100' src={require("../images/background-image.jpg")} />
                    </div>
                    <div>
                        <div>Unlimited movies, TV shows, and more.</div>
                        <div>Watch anywhere. Cancel anytime.</div>
                        <Form className='' >
                            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                            <InputGroup className="row m-auto" >
                                <Form.Control className="col-2" size="lg" />
                                <Button className="col-4" size="lg" >Get Started</Button>
                            </InputGroup>   
                        </Form>
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default HomePage;