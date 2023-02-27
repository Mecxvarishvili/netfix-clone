import React from 'react';
import Image from "react-bootstrap/Image"
import Figure from 'react-bootstrap/Figure';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
const LogInPage = () => {
    return (
        <div className="lg-page position-relative min-vh-100 bg-black" style={{zIndex: 0}}>
            <div className="login-background position-absolute w-100 h-100 min-vh-100 overflow-hidden opacity-50" style={{zIndex: -1}}>
                <Image className="min-w-100 min-h-100" src={require("../images/background-image.jpg")}/>
            </div>
            <div className="position-absolute top-0 start-9 w-100">
                <Image className="img-" src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"/>
            </div>
            <div className="container" >
                <Form>
                    
                    <Form.Control type="email" />
                    <Form.Control type="password" />
                    <Button variant="primary" type="submit">Sign In</Button>
                </Form>
                <div className="container-sm">100% wide until small breakpoint</div>
            </div>
        </div>
    );
};

export default LogInPage;