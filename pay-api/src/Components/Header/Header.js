import React from "react";
import classes from '../Header/Header.module.css';

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
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                <div className={classes.RightSideLinks}>
                    <Button variant="primary">Schedule a Demo</Button>
                </div>
            </Container>
        </div>
    )
}

export default Header;