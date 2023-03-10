import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    isOpen: boolean
}
const NavBar = ({isOpen}: Props) => {
    return (
        isOpen ?
        <div className="nav-bar position-fixed start-0" >
            <div>
                <Link to={"/"}>account</Link>
                <div>sign out from netflix</div>
            </div>
            <div>
                <div>home</div>
                <div>tv shows</div>
                <div>movies</div>
            </div>
        </div> : <></>
    );
};

export default NavBar;