import React from 'react';
import Button from 'react-bootstrap/Button';
import {GrPlayFill } from 'react-icons/gr';

const PlayButton = () => {
    return (
        <Button className="px-4 me-3 fs-lg-125 fs-xxl-15 bg-white text-black fw-medium d-flex align-items-center border-0" > <GrPlayFill /> &nbsp;<span>Play</span></Button>
    );
};

export default PlayButton;