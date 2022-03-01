import React from "react";
import Logo from '../../logo.svg';
import classes from './Header.module.css';

const Header = () => {
    return (
        <div>
            <div className={classes.Logo}>
                <img src={Logo} />
            </div>
            {/* Straight white line goes here */}
            <div className={classes.tempDiv}>

            </div>
            <div className={classes.Links}>
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