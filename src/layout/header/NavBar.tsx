import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    isOpen: boolean
}
const NavBar = ({isOpen}: Props) => {
    return (
        isOpen ?
        <div>
            <div className="nav-bar position-fixed start-0 opacity-100 h-100 text-white" >

                <div>
                    <Link to={"/"}>account</Link>
                    <div>sign out from netflix</div>
                </div>
                <div>
                    <div>home</div>
                    <div>tv shows</div>
                    <div>movies</div>
                    <div>movies</div>
                    <div>movies</div>
                    <div>movies</div>
                    <div>movies</div>
                    <div>movies</div>
                    <div>movies</div>
                </div>
            </div> 
            <div className="nav-bar-background position-fixed start-0 top-0 w-100 h-100" ></div>
        </div>: <></>
    );
};

export default NavBar;