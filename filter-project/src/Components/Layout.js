import React from 'react';
import classes from '../Components/Layout.module.css';
import { Container, Row, Col } from 'react-bootstrap';

import Job from './Job/Job';

const Layout = () => {
    return(
        <div>
            <Container>
                <div>
                    <Job />
                </div>
            </Container>
        </div>
    )
}

export default Layout