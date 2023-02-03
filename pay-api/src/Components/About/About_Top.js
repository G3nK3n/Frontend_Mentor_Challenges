import React from "react";
import classes from './About_Top.module.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Img1 from '../../image-team-members.jpg';
import Circle from '../../bg-pattern-circle.svg';

const About = () => {
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                    {/* CHANGE MARGIN WHEN REACHING 1440px */}
                        <div className={classes.MainTitle}>
                            <h1>
                                We empower innovators by delivering access to the financial system
                            </h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={classes.MainVisionDiv}>
                            <div className={classes.VisionTitle}>
                                <h2>Our Vision</h2>
                            </div>
                            <div className={classes.VisionText}>
                                <p>
                                    Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure.
                                    The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems.
                                    We are deeply focused on democratizing financial services through technology. 
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={classes.MainBusinessDiv}>
                            <div className={classes.BusinessTitle}>
                                <h2>Our Business</h2>
                            </div>
                            <div className={classes.BusinessText}>
                                <p>
                                    At the core of our platform is the technical infrastructure APIs that connect consumers.
                                    Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers. 
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className={classes.ImageDiv}>
                <img className={classes.PeopleImage} src={Img1} />
                <img className={classes.Circle} src={Circle} />
            </div>
        </div>
    )
}

export default About;