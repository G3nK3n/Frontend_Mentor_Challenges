import React from "react";
import Logo from '../../logo.svg';
import classes from './Header.module.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {
    return (
        <div>
            {/* The g-0 removes the margins 1.5px on each side. Available on Bootstrap V5 */}
            <Row className="g-0">
                <Col className="d-none d-lg-block">
                    {/* d-none d-lg-block */}
                    <div className={classes.Logo}>
                        <img src={Logo} />
                    </div>
                

                    <div className={classes.tempDiv}></div>
                
                    <div className={classes.Links}>
                        <ul>
                            <li><a href="#"><span><div><b>00</b>Home</div></span></a></li>
                            <li><a href="#"><span><div><b>01</b>Destination</div></span></a></li>
                            <li><a href="#"><span><div><b>02</b>Crew</div></span></a></li>
                            <li><a href="#"><span><div><b>03</b>Technology</div></span></a></li>
                        </ul>
                    </div>
                </Col>
                <Col className="d-none d-sm-block d-md-block d-lg-none">
                    {/* d-block d-lg-none */}
                    <div className={classes.Logo}>
                        <img src={Logo} />
                    </div>
                

                    <div className={classes.tempDiv}></div>
                
                    <div className={classes.Links}>
                        <ul>
                            <li><a href="#"><span><div>Home</div></span></a></li>
                            <li><a href="#"><span><div>Destination</div></span></a></li>
                            <li><a href="#"><span><div>Crew</div></span></a></li>
                            <li><a href="#"><span><div>Technology</div></span></a></li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Header;