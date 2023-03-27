import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
interface Props {
    items: string[]
}
const MainFooter = () => {
    const items: string[] = ["Audio Description", "Help Center", "Gift Cards", "Media Center", "Investor Relations", "Jobs", "Terms of Use", "Privacy", "Legal Notices", "Cookie Preferences", "Corporate Information", "Contact Us"]

    return (
        <footer className="footer px-s mt-5" >
            <div className="footer-cont mx-auto">
                <div className="text-white fs-5 mb-3" >
                    <Link to="https://www.facebook.com/netflix/" >
                        <FaFacebookF className="text-white me-4" />
                    </Link>
                    <Link to="https://www.instagram.com/Netflix/"><FaInstagram className="text-white me-4"  /></Link>
                    <Link to="https://www.youtube.com/@Netflix"><FaYoutube className="text-white m"  /></Link>
                </div>
                <Container className="px-0 text-secondary" fluid >
                    <Row className="row-cols-2 row-cols-sm-3 row-cols-md-4 gy-3 gx-0 font-13" >
                        {items.map((item) => (
                            <Col key={item}>{item}</Col>
                        ))}
                    </Row>
                </Container>
                <div className="font-13 text-secondary mt-4 mb-5" >© 1997-2023 Netflix, Inc.</div>
            </div>
        </footer>
    );
};

export default MainFooter;