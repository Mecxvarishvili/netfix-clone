import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Image from "react-bootstrap/Image"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import page from './page';
import { Link } from "react-router-dom"

const HomePage = () => {
    const contRef = useRef<HTMLDivElement | any >(null)
    const [ contHeight, setContHeight ] = useState()

    useEffect(() => {
        if (!contRef.current) return; // wait for the elementRef to be available
        const resizeObserver = new ResizeObserver(() => {
            setContHeight(contRef?.current?.offsetHeight+ 100)
        });
        resizeObserver.observe(contRef.current);
        return () => resizeObserver.disconnect();
    }, [])
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
                <div ref={contRef} className="position-relative py-5 px-5p border-bottom border-5 border-primary">
                    <div style={{zIndex: -1, top: -90, height: `${contHeight}px`}} className="position-absolute start-0 w-100 bg-black">
                        <Image className='w-100 h-100 position-relative object-fit-cover opacity-50' src={require("../images/background-image2.jpg")} />
                    </div>
                    <div className="main-box m-auto py-4 py-sm-5" >
                        <div className="text-center fw-medium fs-xs-175 fs-sm-3125 fs-xxl-4 pt-md-5 lh-1 mx-5" >Unlimited movies, TV shows, and more.</div>
                        <div className="text-center my-3 fs-xs-1125 fs-sm-1625">Watch anywhere. Cancel anytime.</div>
                        <Form className='' >
                            <div className="text-center pb-2 pb-sm-3 fs-xs-1125  fs-lg-12 px-5" >Ready to watch? Enter your email to create or restart your membership.</div>
                            <div className="row justify-content-center" >
                                <input className="input-cont col-lg-9"/>
                                <Button className="button-cont fs-xs- fs-lg-3 bg-danger border-0 col-lg-3" >get Started</Button>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className="position-relative py-5 px-5p bg-black">

                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default HomePage;