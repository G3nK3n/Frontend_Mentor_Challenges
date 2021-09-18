import React from 'react';
import classes from '../MainPage/MainPage.module.css';
import Img1 from '../../illustration-hero.svg';
import Img2 from '../../logo.svg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const mainpage = () => {
    return(
        <div className={classes.MainPage}>
            <Row>
                <Col>
                    <div className={classes.LeftSide}>
                        <h1>A Simple Boommark Manager</h1>
                        <p>A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free</p>
                        <Button className={classes.ChromeButton}>Get it on chrome</Button>
                        <Button className={classes.FFButton}>Get it on Firefox</Button>
                    </div>
                </Col>
                <Col>
                    <div className={classes.backgroundDiv}>

                    </div>
                    <div className={classes.mainImage}>
                        <img src={Img1} />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default mainpage;