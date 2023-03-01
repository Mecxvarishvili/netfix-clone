import React from 'react';
import Image from "react-bootstrap/Image"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom"
import page from './page';

const LogInPage = () => {
    return (
        <div className="text-secondary lg-page position-relative min-vh-100 bg-black" style={{zIndex: 0}}>
            <div className=" d-none d-md-block login-background position-absolute w-100 h-100 min-vh-100 overflow-hidden opacity-50" style={{zIndex: -1}}>
                <Image className="min-vw-100 min-vh-100" src={require("../images/background-image.jpg")}/>
            </div>
            <div className="start-9 w-100">
                <Link to={page.HOME}>
                    <Image className="login-logo m-3 m-sm-4" src={require("../images/Logonetflix.png")}/>
                </Link>
            </div>
            <div className="form-cont px-4 p-md-5 mx-auto bg-black bg-opacity-75 rounded" >
                <div className="in-form-cont px-2 p-md-3 py-4">
                    <div className="fs-1 fw-bold text-white mb-4" >Sign In</div>
                    <Form>
                        <InputGroup size="lg">
                            <Form.Control className="mb-3 bg-dark text-secondary border-0 rounded-1" type="email" />
                        </InputGroup>
                        <InputGroup size="lg">
                            <Form.Control className="mb-3 bg-dark text-secondary border-0 rounded-1" type="password" />
                        </InputGroup>
                        <Button className="fs-6 fw-bolder mt-4 mb-3 w-100 rounded-1" variant="danger" size="lg" type="submit">Sign In</Button>
                        <InputGroup className="d-flex justify-content-between" >
                            <Form.Check label="Remember me" />
                            <div>Need help?</div>
                        </InputGroup>
                    </Form>
                    <div className='mt-2 mt-sm-4 mt-md-5' >New to Netflix? <Link className='text-white text-decoration-none' to={page.SIGNUP} >SIgn up now</Link>.</div>
                    <div className="font-13 mt-3" >This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="text-info" >Learnm more.</span></div>
                </div>
            </div>
            <div className="border-top border-1 border-secondary d-md-none"></div>
            <div className="container-fluid bg-black bg-opacity-75 p-4" >
                <div className="footer-cont p-2 mx-auto">
                    <div className="mb-4" >Questions? Contact us.</div>
                    <Container className='px-0' fluid>
                        <Row className="font-13 gy-2 gx-0 gy-md-3 mt-2 fw-light row-cols-2 row-cols-sm-3 row-cols-md-4" >
                            <Col >FAQ</Col>
                            <Col >Help Center</Col>
                            <Col >Terms of Use</Col>
                            <Col >Privacy</Col>
                            <Col >Cookie Preferences</Col>
                            <Col >Corporate Information</Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default LogInPage;