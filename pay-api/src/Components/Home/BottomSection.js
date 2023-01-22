import React from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import EasyToImplement from '../../illustration-easy-to-implement.svg';

const BottomSection = () => {
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <img src={EasyToImplement} />
                    </Col>
                    <Col>
                        <div>
                            <h1>Easy to implement</h1>
                            <p>
                                Our API comes with just a few lines of code.
                                You'll be up and running in no time. We build our
                                documentation page to integrate paymements functionality with ease.
                            </p>    
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BottomSection;