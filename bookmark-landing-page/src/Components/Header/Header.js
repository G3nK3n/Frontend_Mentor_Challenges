import React from 'react';
import classes from '../Header/Header.module.css';
import Logo from '../../logo-bookmark.svg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const headerpage = () => {
    return(
        <div>
            <div className={classes.Header}>
                <Row>
                    <Col>
                        <div>
                            <a href="#" ><img src={Logo} /></a>
                            <div className={classes.Links}>
                                <ul>
                                    <li><a href="#">Features</a></li>
                                    <li><a href="#">Pricing</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li className={classes.Login}><a href="#">Login</a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default headerpage;