import React, { useState } from 'react';
import classes from '../Components/Layout.module.css';
import { Container, Row, Col } from 'react-bootstrap';

import Job from './Job/Job';
import Forms from './Form/Form';

const Layout = () => {
    
    const [companyName, setCompanyName] = useState('');
    const [companyNameArray, setCompanyNameArray] = useState([]);

    const handleCompanyName = (e) => {
        setCompanyName(e.target.value);
    }

    const addFilter = () => {
        //TEST ARRAY STATES FOR COMPANY NAME, THEN OTHERS AFTER
        let oldArray = [];
        oldArray = [...companyNameArray];
        oldArray.push(companyName);
        setCompanyNameArray(oldArray);

    }

    return(
        <div className={classes.Filter}>
            <Container>
                <div>
                    {/* <Job />
                    <Job /> */}
                    <Forms addToFilter={addFilter} companyNameValue={handleCompanyName}/>
                    {companyNameArray.map((name) => {
                       return(
                            <p>{name}</p>
                        ); 
                    })}
                </div>
            </Container>
        </div>
    )
}

export default Layout