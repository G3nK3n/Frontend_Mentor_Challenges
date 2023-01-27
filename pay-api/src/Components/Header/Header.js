import React from "react";
import classes from '../Header/Header.module.css';

import { Link } from 'react-router-dom';

import LogoImage from '../../logo.svg';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Header = () => {
    return(
        <div className={classes.MainHeaderDiv}>
            <Container>
                <div className={classes.LeftSideLinks}>
                    <img src={LogoImage} />
                </div>
                <ul>
                        <li><Link to={"/pricing"}>Pricing</Link></li>
                        <li><Link to={"/about"}>About</Link></li>
                        <li><Link to={"/contact"}>Contact</Link></li>
                    </ul>
                <div className={classes.RightSideLinks}>
                    <Button variant="primary">Schedule a Demo</Button>
                </div>
            </Container>
        </div>
    )
}

export default Header;