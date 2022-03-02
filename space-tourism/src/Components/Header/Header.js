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
                    <li><p><b>00</b> Home</p></li>
                    <li><p><b>01</b> Destination</p></li>
                    <li><p><b>02</b> Crew</p></li>
                    <li><p><b>03</b> Technology</p></li>
                </ul>
            </div>

        </div>
    );
}

export default Header;