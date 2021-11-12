import React from 'react';

import classes from '../Footer/Footer.module.css';
import Logo from '../../logo-bookmark.svg';
import Facebook from '../../icon-facebook.svg';
import Twitter from '../../icon-twitter.svg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const footer = () => {
    return(
        <div>
            <div className={classes.Header}>
                <Row>
                    <Col>
                        <div>
                            <a href="#" className={classes.Logo} ><img src={Logo} alt="Logo" /></a>
                            <div className={classes.Links}>
                                <ul>
                                    <li><a href="#">FEATURES</a></li>
                                    <li><a href="#">PRICING</a></li>
                                    <li><a href="#">CONTACT</a></li>
                                </ul>
                            </div>
                            <div className={classes.SocialMedia}>
                                <ul>
                                    <li><a href="#"><img src={Facebook} alt="Logo" /></a></li>
                                    <li><a href="#"><img src={Twitter} alt="Logo" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default footer;