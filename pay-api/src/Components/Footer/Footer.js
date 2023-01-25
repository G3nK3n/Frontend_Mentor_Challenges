import React from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from '../Footer/Footer.module.css';

import LogoImage from '../../logo.svg';
import FacebookImage from '../../facebook.svg';
import TwitterImage from '../../twitter.svg';
import LinkedInImage from '../../linkedin.svg';

const Footer = () => {
    return(
        <div>
            <Container fluid>
                <Row>
                    <Col>
                        <div className={classes.OuterStart}>
                            <h1>Ready to start?</h1>
                            <Form>
                                <Form.Group className={classes.FormGroup} controlId="formBasicRequest">
                                    <Form.Control type="email" placeholder="Enter email address" />
                                </Form.Group>
                                <div className={classes.ReadyToStart}>
                                    <Button variant="primary">Schedule a Demo</Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
                <Row className={classes.FooterRow}>
                    <Col>
                        <div className={classes.MainHeaderDiv}>
                            <div className={classes.LeftSideLinks}>
                                <img src={LogoImage} />
                            </div>
                            <ul>
                                    <li><p>Pricing</p></li>
                                    <li><p>About</p></li>
                                    <li><p>Contact</p></li>
                                </ul>
                            <div className={classes.RightSideLinks}>
                                <img src={FacebookImage} className={classes.SocialMedia}/>
                                <img src={TwitterImage} className={classes.SocialMedia}/>
                                <img src={LinkedInImage}/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;