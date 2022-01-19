import React, { useState, useEffect } from 'react';
import classes from '../Components/Layout.module.css';
import { Container, Row, Col } from 'react-bootstrap';

import Job from './Job/Job';
import Forms from './Form/Form';

const Layout = () => {
    
    const [companyName, setCompanyName] = useState('');
    const [companyID, setCompanyID] = useState(0);
    const [companyNameArray, setCompanyNameArray] = useState([]);
    //FIX ID PROBLEM FOR COMPANY ID

    const handleCompanyName = (e) => {
        setCompanyName(e.target.value);
    }

    const addFilter = () => {
        //Continue to add attributes from form as you coninue coding
        let oldArray = [];
        oldArray = [...companyNameArray, {id: companyID, company: companyName}];
        setCompanyNameArray(oldArray);
    }

    const eachList = (i) => {
        return (
            //Since it is objects, make sure you add a the index.??? to update the object
            <div key={i.id}>
                <Job key={i} index={i.id} theCompanyName={i.company} />
            </div>
        );
    }

    return(
        <div className={classes.Filter}>
            <Container>
                <div>

                    <Forms addToFilter={addFilter} companyNameValue={handleCompanyName}/>

                    {companyNameArray.map(eachList)}
                    
                </div>
            </Container>
        </div>
    )
}

export default Layout