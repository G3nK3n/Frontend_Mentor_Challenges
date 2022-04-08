import React from "react";
import Home from './Home/Home';
import Header from './Header/Header';
import classes from './Layout.module.css';
import Modal from './Modal/Modal';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Layout = () => {
    return(
        <div className={classes.BackgroundImage}>
            <Header />
            <Home />
            <Row>
                <Col className="d-block d-sm-none">
                    {/* Only appear in SM and X-SM */}
                    <Modal />    
                </Col>   
            </Row>
            
        </div>
    )
}

export default Layout;