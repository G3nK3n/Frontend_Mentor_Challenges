import React from "react";
import Logo from '../../logo.svg';

const Header = () => {
    return (
        <div>
            <div>
                <img src={Logo} />
            </div>
            {/* Straight white line goes here */}
            <div>
                <ul>
                    <li>00 Home</li>
                    <li>01 Destination</li>
                    <li>02 Crew</li>
                    <li>03 Technology</li>
                </ul>
            </div>

        </div>
    );
}

export default Header;