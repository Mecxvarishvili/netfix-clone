import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    const array: string[] = ["FAQ", "Help Center", "Account", "Media Center", "Investor Relations", "Jobs", "Ways to Watch", "Terms of Use", "Privacy", "Cookie Preferences", "Corporate Information", "Contact Us", "Speed Test", "Legal Notices", "Only on Netflix"]
    return (
        <div className='footer bg-black text-muted' >
            <div className='px-3 py-5 footer-cont mx-auto' >
                <div className="pt-sm-4" >Questions? Contact us.</div>
                <Container className="px-0 mt-4 mb-5"  fluid >
                    <Row className="row-cols-2 row-cols-sm-3 row-cols-md-4 gy-3  font-13" >
                        {array.map((el, key) => {
                            return (
                                <Col key={key}>{el}</Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Footer;