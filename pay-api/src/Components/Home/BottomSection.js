import React from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from '../Home/BottomSection.module.css';

import EasyToImplement from '../../illustration-easy-to-implement.svg';
import SimpleUI from '../../illustration-simple-ui.svg';
import PersonalFinance from '../../icon-personal-finances.svg';
import BankingCoverage from '../../icon-banking-and-coverage.svg';
import ConsumerPayment from '../../icon-consumer-payments.svg';

const BottomSection = () => {
    return(
        <div className={classes.MainBottomSectionDiv}>
            <Container>
                <Row>
                    <Col>
                        <div className={classes.UI}>
                            <img src={EasyToImplement} />
                        </div>
                    </Col>
                    <Col>
                        <div className={classes.EasyTexts}>
                            
                            <h1>Easy to implement</h1>
                            <p>
                                Our API comes with just a few lines of code.
                                You'll be up and running in no time. We build our
                                documentation page to integrate paymements functionality with ease.
                            </p> 
                            
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={classes.SimpleTexts}>
                            <h1>Simple UI & UX</h1>
                            <p>
                                Our pre-built form is easy to integrate in your app or website's checkout
                                flow and designed to optimize conversion.
                            </p>    
                        </div>
                    </Col>
                    <Col>
                        <div className={classes.SimpleUI}>
                            <img src={SimpleUI} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={classes.PersonalFinance}>
                            <img src={PersonalFinance} />
                            <h4>Personal Finances</h4>
                            <p>
                                Consolidate financial data from multiple sources and categorize transactions up to 2 years of history.
                                Analyze reports to reconcile activities in your account.
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className={classes.BankingCoverage}>
                            <img src={BankingCoverage} />
                            <h4>Banking & Coverage</h4>
                            <p>
                                With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className={classes.ConsumerPayment}>
                            <img src={ConsumerPayment} />
                            <h4>Consumer Payments</h4>
                            <p>
                                It's easier to set up secure bank payments with us through a flow designed with the user experience in mind.
                                Customers could instantly authenticate their account.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BottomSection;