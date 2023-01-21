import React from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

import classes from '../Home/Partners.module.css';

import Google from '../../google.svg';
import HP from '../../hewlett-packard.svg';
import Microsoft from '../../microsoft.svg';
import Nvidia from '../../nvidia.svg';
import Oracle from '../../oracle.svg';
import Tesla from '../../tesla.svg';


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
                <div className={classes.RightSideContent}>
                    <Table size="sm" className={classes.RightTable} borderless>
                        <tbody>
                            <tr>
                                <td><img src={Tesla} /></td>
                                <td><img src={Microsoft} /></td>
                                <td><img src={HP} /></td>
                            </tr>
                            <tr>
                                <td><img src={Oracle} /></td>
                                <td><img src={Google} /></td>
                                <td><img src={Nvidia} /></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    )
}

export default Partners;
