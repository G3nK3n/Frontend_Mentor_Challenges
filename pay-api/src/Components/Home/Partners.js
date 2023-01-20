import React from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import classes from '../Home/Partners.module.css';

const Partners = () => {
    return(
        <div className={classes.PartnersDiv}>
            <Container>
                <div className={classes.LeftSideContent}>
                    <h1>Who we work with</h1>
                    <p>
                        Today, millions of people around the world have successfully connected their accounts to apps they love using our API. 
                        We provided developers with the tools they need to create easy and accessible experiences for their users.
                    </p>
                    <Button>About Us</Button>
                </div>
            </Container>
        </div>
    )
}

export default Partners;
