import React from "react";
import Logo from '../../logo.svg';
import Hamburger from '../../icon-hamburger.svg';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = (props) => {
    return (
        <div>
            {/* The g-0 removes the margins 1.5px on each side. Available on Bootstrap V5 */}
            <Row className="g-0">
                <Col className="d-none d-lg-block">
                    {/* Visible only in large screen and above */}
                    <div className={classes.Logo}>
                        <img src={Logo} />
                    </div>
                

                    <div className={classes.tempDiv}></div>
                
                    <div className={classes.Links}>
                        <ul>
                            {/* <li><a href="#"><span><div><b>00</b>Home</div></span></a></li> */}
                            <li><Link to={"/"}><span><div><b>00</b>Home</div></span></Link></li>
                            {/* <li><a href="#"><span><div><b>01</b>Destination</div></span></a></li> */}
                            <li><Link to={"/destination"}><span><div><b>01</b>Destination</div></span></Link></li>
                            <li><a href="#"><span><div><b>02</b>Crew</div></span></a></li>
                            <li><a href="#"><span><div><b>03</b>Technology</div></span></a></li>
                            
                        </ul>
                    </div>
                </Col>
                <Col className="d-none d-sm-block d-md-block d-lg-none">
                    {/* Visible only in small and medium screen */}
                    <div className={classes.Logo}>
                        <img src={Logo} />
                    </div>
                

                    <div className={classes.tempDiv}></div>
                
                    <div className={classes.Links}>
                        <ul>
                            {/* <li><a href="#"><span><div>Home</div></span></a></li> */}
                            <li><Link to={"/"}><span><div>Home</div></span></Link></li>
                            {/* <li><a href="#"><span><div>Destination</div></span></a></li> */}
                            <li><Link to={"/destination"}><span><div>Destination</div></span></Link></li>
                            <li><a href="#"><span><div>Crew</div></span></a></li>
                            <li><a href="#"><span><div>Technology</div></span></a></li>
                        </ul>
                    </div>
                </Col>
                <Col className="d-block d-sm-none">
                    <div className={classes.Logo}>
                        <img src={Logo} />
                    </div>

                    <div className={classes.Hamburger}>
                        <img onClick={props.openIcon} src={Hamburger} />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Header;