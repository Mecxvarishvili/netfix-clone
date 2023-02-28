import React from 'react';
import Image from "react-bootstrap/Image"
import Figure from 'react-bootstrap/Figure';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { InputGroup } from 'react-bootstrap';
const LogInPage = () => {
    return (
        <div className="text-secondary lg-page position-relative min-vh-100 bg-black" style={{zIndex: 0}}>
            <div className=" d-none d-md-block login-background position-absolute w-100 h-100 min-vh-100 overflow-hidden opacity-50" style={{zIndex: -1}}>
                <Image className="min-w-100 min-h-100" src={require("../images/background-image.jpg")}/>
            </div>
            <div className="start-9 w-100">
                <Image className="logo m-3 m-sm-4" src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"/>
            </div>
            <div className="form-cont px-4 p-md-5 mx-auto bg-black bg-opacity-75" >
                <div className="in-form-cont px-2 p-md-3 py-4">
                    <div className="h1 fw-bold text-white mb-4" >Sign In</div>
                    <Form>
                        <InputGroup size="lg">
                            <Form.Control className="mb-3 bg-dark text-secondary border-0 rounded-1" type="email" />
                        </InputGroup>
                        <InputGroup size="lg">
                            <Form.Control className="mb-3 bg-dark text-secondary border-0 rounded-1" type="password" />
                        </InputGroup>
                        <Button className="mt-4 mb-3 w-100 rounded-1" variant="danger" type="submit">Sign In</Button>
                    </Form>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default LogInPage;