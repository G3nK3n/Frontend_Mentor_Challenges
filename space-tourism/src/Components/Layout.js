import React, { useState } from "react";
import Home from './Home/Home';
import Header from './Header/Header';
import classes from './Layout.module.css';
import Modal from './Modal/Modal';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Layout = () => {
    const [hamburgerIcon, setHamburgerIcon] = useState(false);
    
    const closeHamburger = () => {
        setHamburgerIcon(false);
    }

    const openHamburger = () => {
        setHamburgerIcon(true);
    }

    
    return(
        <div className={classes.BackgroundImage}>
            <Header openIcon={openHamburger}/>
            <Home />
            <Row>
                <Col className="d-block d-sm-none">
                    {/* Only appear in SM and X-SM */}
                    {hamburgerIcon === true ? 
                        <div>
                            <Modal closeIcon={closeHamburger}  />
                        </div>: null
                    }
                </Col>   
            </Row>
            
        </div>
    )
    
    
    
}

export default Layout;