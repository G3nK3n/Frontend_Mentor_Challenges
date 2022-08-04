import React, { useState } from "react";
import Home from './Home/Home';
import Destination from './Destinations/Destination';
import Modal from './Modal/Modal';
import Header from './Header/Header';
import Crew from './Crew/Crew';

import classes from './Layout.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {Switch, Route, useLocation} from 'react-router-dom';

const Layout = () => {
    
    //Gets your current path 
    const location = useLocation().pathname;
    
    const [hamburgerIcon, setHamburgerIcon] = useState(false);
    
    const closeHamburger = () => {
        setHamburgerIcon(false);
    }

    const openHamburger = () => {
        setHamburgerIcon(true);
    }
    

    // This function changes the background image depending on the path your in
    const backgroundImageChange = () => {
        if(location=="/") {
            return classes.BackgroundImage;
        }
        else if(location=="/destination" || location=="/destination/moon" || location=="/destination/europa" || location=="/destination/titan" || location=="/destination/mars") {
            return classes.Destination;
        }
        else if(location=="/crew") {
            return classes.Crew
        }
    }
    
    return(
        <div className={backgroundImageChange()}>
            <Header openIcon={openHamburger}/>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/destination'>
                    <Destination />
                </Route>
                <Route path='/crew'>
                    <Crew />
                </Route>
                
            </Switch>
            <Row>
                <Col className="d-block d-sm-none">
                    {/* Only appear in SM and X-SM */}
                    {/* {hamburgerIcon === true ? 
                        <div>
                            <Modal closeIcon={closeHamburger}  />
                        </div>: null
                    } */}
                   <Modal show={hamburgerIcon} closeIcon={closeHamburger} />
                </Col>   
            </Row>
        </div>
    )
    
    
    
}

export default Layout;