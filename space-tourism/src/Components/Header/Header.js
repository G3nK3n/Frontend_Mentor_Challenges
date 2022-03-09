import React from "react";
import Logo from '../../logo.svg';
import classes from './Header.module.css';

const Header = () => {
    return (
        <div>
            <div className={classes.Logo}>
                <img src={Logo} />
            </div>
            
            {/* <div className={classes.whiteLine}></div> */}

            <div className={classes.tempDiv}></div>
            <div className={classes.Links}>
                <ul>
                    <li><a href="#"><p><div><b>00</b>Home</div></p></a></li>
                    <li><a href="#"><p><div><b>01</b>Destination</div></p></a></li>
                    <li><a href="#"><p><div><b>02</b>Crew</div></p></a></li>
                    <li><a href="#"><p><div><b>03</b>Technology</div></p></a></li>
                </ul>
            </div>

        </div>
    );
}

export default Header;