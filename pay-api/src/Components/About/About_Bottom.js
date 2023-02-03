import React from "react";
import classes from './About_Bottom.module.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const About_Bottom = () => {
    return(
        <div className={classes.About_Bottom_Div}>
            <Container>
                <Row>
                    <Col>
                        <div className={classes.Bottom_Analytics}>
                            <hr/>
                            <p>Team Members</p>
                            <h1>300+</h1>
                            <hr/>
                        </div>
                    </Col>
                    <Col>
                        <div className={classes.Bottom_Analytics}>
                            <hr/>
                            <p>Offices in the US</p>
                            <h1>3</h1>
                            <hr/>
                        </div>
                    </Col>
                    <Col>
                        <div className={classes.Bottom_Analytics}>
                            <hr/>
                            <p>Transactions analyzed</p>
                            <h1>10M+</h1>
                            <hr/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={classes.MainCultureDiv}>
                            <div className={classes.CultureTitle}>
                                <h2>The Culture</h2>
                            </div>
                            <div className={classes.CultureText}>
                                <p>
                                    We strongly believe there's always an opportunity to learn from each other outisde of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups.
                                    We always value cross-team collaboration and diversity of thought, no matter the job title. 
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={classes.MainPeopleDiv}>
                            <div className={classes.PeopleTitle}>
                                <h2>The People</h2>
                            </div>
                            <div className={classes.PeopleText}>
                                <p>
                                    We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About_Bottom;