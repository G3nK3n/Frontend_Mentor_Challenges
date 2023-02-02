import React from "react";
import classes from './Pricing.module.css';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Circle from '../../bg-pattern-circle.svg';

const Pricing = () => {
    return(
        <div className={classes.MainPricingDiv}>
            <img className={classes.Circle} src={Circle} />
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
                        <div className={classes.PlanDiv}>
                            <div>
                                <h4>Free Plan</h4>
                                <h2>$0.00</h2>
                            </div>
                            <hr />
                            <div>
                                <ul>
                                    <li className={classes.TheList}><p>Transaction</p></li>
                                    <li className={classes.TheList}><p>Auth</p></li>
                                    <li className={classes.TheList}><p>Identity</p></li>
                                    <li className={classes.TheListOpacity}><p>Investments</p></li>
                                    <li className={classes.TheListOpacity}><p>Assets</p></li>
                                    <li className={classes.TheListOpacity}><p>Liabilities</p></li>
                                    <li className={classes.TheListOpacity}><p>Income</p></li>
                                </ul>
                                <hr />
                                <Button>Request Access</Button>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className={classes.PlanDiv}>
                            <div>
                                <h4>Basic Plan</h4>
                                <h2>$249.00</h2>
                            </div>
                            <hr />
                            <div>
                                <ul>
                                    <li className={classes.TheList}><p>Transaction</p></li>
                                    <li className={classes.TheList}><p>Auth</p></li>
                                    <li className={classes.TheList}><p>Identity</p></li>
                                    <li className={classes.TheList}><p>Investments</p></li>
                                    <li className={classes.TheList}><p>Assets</p></li>
                                    <li className={classes.TheListOpacity}><p>Liabilities</p></li>
                                    <li className={classes.TheListOpacity}><p>Income</p></li>
                                </ul>
                                <hr />
                                <Button>Request Access</Button>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className={classes.PlanDiv}>
                            <div>
                                <h4>Premium Plan</h4>
                                <h2>$499.00</h2>
                            </div>
                            <hr />
                            <div>
                                <ul>
                                    <li className={classes.TheList}><p>Transaction</p></li>
                                    <li className={classes.TheList}><p>Auth</p></li>
                                    <li className={classes.TheList}><p>Identity</p></li>
                                    <li className={classes.TheList}><p>Investments</p></li>
                                    <li className={classes.TheList}><p>Assets</p></li>
                                    <li className={classes.TheList}><p>Liabilities</p></li>
                                    <li className={classes.TheList}><p>Income</p></li>
                                </ul>
                                <hr />
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