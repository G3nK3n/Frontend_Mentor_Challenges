import React from "react";
import classes from './Pricing.module.css';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Pricing = () => {
    return(
        <div className={classes.MainPricingDiv}>
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
                            <div className={classes.TheList}>
                                <ul>
                                    <li><p>Transaction</p></li>
                                    <li><p>Auth</p></li>
                                    <li><p>Identity</p></li>
                                    <li><p>Investments</p></li>
                                    <li><p>Assets</p></li>
                                    <li><p>Liabilities</p></li>
                                    <li><p>Income</p></li>
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
                                    <li><p>Transaction</p></li>
                                    <li><p>Auth</p></li>
                                    <li><p>Identity</p></li>
                                    <li><p>Investments</p></li>
                                    <li><p>Assets</p></li>
                                    <li><p>Liabilities</p></li>
                                    <li><p>Income</p></li>
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
                                    <li><p>Transaction</p></li>
                                    <li><p>Auth</p></li>
                                    <li><p>Identity</p></li>
                                    <li><p>Investments</p></li>
                                    <li><p>Assets</p></li>
                                    <li><p>Liabilities</p></li>
                                    <li><p>Income</p></li>
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