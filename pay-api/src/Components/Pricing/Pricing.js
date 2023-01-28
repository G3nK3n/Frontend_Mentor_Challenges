import React from "react";
import classes from './Pricing.module.css';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Pricing = () => {
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className={classes.Pricing}>
                            <h1>Pricing</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <div>
                                <h4>Free Plan</h4>
                                <h2>$0.00</h2>
                            </div>
                            <div>
                                <ul>
                                    <li>Transaction</li>
                                    <li>Auth</li>
                                    <li>Identity</li>
                                    <li>Investments</li>
                                    <li>Assets</li>
                                    <li>Liabilities</li>
                                    <li>Income</li>
                                </ul>
                                <Button>Request Access</Button>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <div>
                                <h4>Basic Plan</h4>
                                <h2>$249.00</h2>
                            </div>
                            <div>
                                <ul>
                                    <li>Transaction</li>
                                    <li>Auth</li>
                                    <li>Identity</li>
                                    <li>Investments</li>
                                    <li>Assets</li>
                                    <li>Liabilities</li>
                                    <li>Income</li>
                                </ul>
                                <Button>Request Access</Button>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <div>
                                <h4>Premium Plan</h4>
                                <h2>$499.00</h2>
                            </div>
                            <div>
                                <ul>
                                    <li>Transaction</li>
                                    <li>Auth</li>
                                    <li>Identity</li>
                                    <li>Investments</li>
                                    <li>Assets</li>
                                    <li>Liabilities</li>
                                    <li>Income</li>
                                </ul>
                                <Button>Request Access</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Pricing;