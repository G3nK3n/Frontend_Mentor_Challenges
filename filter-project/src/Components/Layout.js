import React, { useState } from 'react';
import classes from '../Components/Layout.module.css';
import { Container, Row, Col } from 'react-bootstrap';

import Job from './Job/Job';
import Forms from './Form/Form';

const Layout = () => {
    
    const [companyName, setCompanyName] = useState('');

    const handleCompanyName = (e) => {
        setCompanyName(e.target.value);
    }

    const addFilter = (e) => {
        //TEST ARRAY STATES FOR COMPANY NAME, THEN OTHERS AFTER
    }

    return(
        <div className={classes.Filter}>
            <Container>
                <div>
                    {/* <Job />
                    <Job /> */}
                    <Forms companyNameValue={handleCompanyName}/>
                    <p>{companyName}</p>
                </div>
            </Container>
        </div>
    )
}

export default Layout