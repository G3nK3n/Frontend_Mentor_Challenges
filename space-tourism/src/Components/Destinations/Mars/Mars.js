import React from "react";
import classes from "./Mars.module.css";
import Img1 from "../../../image-mars.png";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Mars = () => {
    return(
        <div className={classes.Mars}>
            <Row>
                <Col className="d-none d-lg-block">
                    <div className={classes.MainText}>
                        <h1>Mars</h1>
                        <p className={classes.Paragraphs}>
                            Dont't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system.
                            It's two and a half times the sizes of Everest.
                        </p>
                    </div>
                    
                    <div className={classes.Description}>
                        <h5>Avg. Distance</h5>
                        <p>225 MIL. KM</p>
                    </div>
                    <div className={classes.Description}>
                        <h5>Est. Travel Time</h5>
                        <p>9 MONTHS</p>
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
                        <h1>Mars</h1>
                        <p className={classes.Paragraphs}>
                            Dont't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system.
                            It's two and a half times the sizes of Everest.
                        </p>
                    </div>

                    <div className={classes.outerDescription}>
                        <div className={classes.Description}>
                            <h5>Avg. Distance</h5>
                            <p>225 MIL. KM</p>
                        </div>
                        <div className={classes.Description}>
                            <h5>Est. Travel Time</h5>
                            <p>9 MONTHS</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Mars;