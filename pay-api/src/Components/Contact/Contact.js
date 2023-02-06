import React from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from '../Contact/Contact.module.css';

import Google from '../../google.svg';
import HP from '../../hewlett-packard.svg';
import Microsoft from '../../microsoft.svg';
import Nvidia from '../../nvidia.svg';
import Oracle from '../../oracle.svg';
import Tesla from '../../tesla.svg';

const Contact = () => {
    return(
        <div className={classes.MainContactDiv}>
            <Container>
                <Row>
                    <Col>
                        <div className={classes.MainTitle}>
                            <h1>Submit a help request and we'll get in touch shortly.</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={classes.ContactForm}>
                            <Form>
                                <Form.Group controlId="formBasicName">
                                    <Form.Control type="name" placeholder="Name" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Email Address" />
                                </Form.Group>
                                <Form.Group controlId="formBasicCompanyName">
                                    <Form.Control type="company_name" placeholder="Company Name" />
                                </Form.Group>
                                <Form.Group controlId="formBasicTitle">
                                    <Form.Control type="title" placeholder="Title" />
                                </Form.Group>
                                <Form.Group controlId="formBasicMessage">
                                    <Form.Control type="message" placeholder="Message" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Check 
                                        type="checkbox"
                                        label="Stay up-to-date with company announcements and updates to our API"
                                    />
                                </Form.Group>
                                <Button type="button">Submit</Button>
                            </Form>
                        </div>
                    </Col>
                    <Col>
                        <div className={classes.RightSideContact}>
                            <h3>Join the thousands of innovators already building with us</h3>
                            <ul>
                                <li><img src={Tesla} /></li>
                                <li><img src={Microsoft} /></li>
                                <li className={classes.HP}><img src={HP} /></li>
                            </ul>
                            <ul>
                                <li><img src={Oracle} /></li>
                                <li className={classes.Google}><img src={Google} /></li>
                                <li className={classes.Nvidia}><img src={Nvidia} /></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact;