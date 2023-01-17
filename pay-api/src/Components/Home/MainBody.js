import React from "react";
import Header from '../Header/Header';
import classes from '../Home/MainBody.module.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const MainBody = () => {
    return(
        <div className={classes.MainBodyDiv}>
            <Header />
            <Container>
                <div className={classes.MainBodyContents}>
                    <div className={classes.LeftSideContents}>
                        <h1>Start building with our APIs for absolutely free</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicRequest">
                                <Form.Control type="email" placeholder="Enter email address" />
                            </Form.Group>
                            <div className={classes.ScheduleDemo}>
                                <Button variant="primary">Schedule a Demo</Button>
                            </div>
                        </Form>
                        <p>Have any questions? Contact Us</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default MainBody;