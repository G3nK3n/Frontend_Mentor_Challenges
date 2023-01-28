import React from "react";
import { Link } from 'react-router-dom';

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
                            </Form>
                            <div className={classes.ReadyToStart}>
                                <Button variant="primary">Schedule a Demo</Button>
                            </div>
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
                                    <li><p><Link to={"/pricing"}>Pricing</Link></p></li>
                                    <li><p><Link to={"/about"}>About</Link></p></li>
                                    <li><p><Link to={"/contact"}>Contact</Link></p></li>
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