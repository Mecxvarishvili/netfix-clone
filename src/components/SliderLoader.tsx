import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface Props {
    isLoading :boolean,
    children: React.ReactNode,
}

const SliderLoader = ({isLoading, children}: Props) => {
    const box = ["0s", "0.2s","0.4s", "0.6s", "0.8s", "1s", "1.2s" ]
    return (
        isLoading ?
        <div className="slider-loader-cont px-s my-4" >
            <div className="slider-loader-title" ></div>
            <Row className="slider-loader-animation-cont row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5  row-cols-xxl-6 g-0 flex-nowrap overflow-hidden" >
                {box.map((sec) => (
                    <Col key={sec} className='slider-loader-animation-box gx-1' >
                        <div className='slider-loader-animation rounded-1' style={{WebkitAnimationDelay: sec, animationDelay: sec}}></div>
                    </Col>
                ))}
            </Row>
        </div> : <>{children}</>
    );
};

export default SliderLoader;