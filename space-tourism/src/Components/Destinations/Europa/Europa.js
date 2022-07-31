import React from "react";
import classes from "./Europa.module.css";
import Img1 from "../../../image-europa.png";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Europa = () => {
    return(
        <div className={classes.Europa}>
            <Row>
                <Col className="d-none d-lg-block">
                    <div className={classes.MainText}>
                        <h1>Europa</h1>
                        <p className={classes.Paragraphs}>
                            The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream.
                            With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.
                        </p>
                    </div>
                    
                    <div className={classes.Description}>
                        <h5>Avg. Distance</h5>
                        <p>628 MIL. KM</p>
                    </div>
                    <div className={classes.Description}>
                        <h5>Est. Travel Time</h5>
                        <p>3 YEARS</p>
                    </div>
                    <div className={classes.Image}>
                        <img src={Img1} />
                    </div>    
                </Col>
            </Row>
            <Row>
                <Col className="d-sm-block d-md-block d-lg-none">
                    
                    <div className={classes.Image}>
                        <img src={Img1} />
                    </div>  
                    <div className={classes.MainText}>
                        <h1>Europa</h1>
                        <p className={classes.Paragraphs}>
                            The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream.
                            With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.
                        </p>
                    </div>

                    <div className={classes.outerDescription}>
                        <div className={classes.Description}>
                            <h5>Avg. Distance</h5>
                            <p>628 MIL. KM</p>
                        </div>
                        <div className={classes.Description}>
                            <h5>Est. Travel Time</h5>
                            <p>3 YEARS</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Europa;