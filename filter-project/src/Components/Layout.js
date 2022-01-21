import React, { useState, useEffect } from 'react';
import classes from '../Components/Layout.module.css';
import { Container, Row, Col } from 'react-bootstrap';

import Job from './Job/Job';
import Forms from './Form/Form';

const Layout = () => {
    
    const [companyID, setCompanyID] = useState(0);
    const [companyName, setCompanyName] = useState('');
    const [jobPosition, setJobPosition] = useState('');
    const [jobSchedule, setJobSchedule] = useState('');
    const [tags, setTags] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);


    const [companyNameArray, setCompanyNameArray] = useState([]);

    const handleCompanyName = (e) => {
        setCompanyName(e.target.value);
    }

    const handleJobPosting = (e) => {
        setJobPosition(e.target.value);
    }

    const handleJobSchedule = (e) => {
        setJobSchedule(e.target.value);
    }

    const handleTags = e => {
        setTags(e.target.value);
    }

    const addFilter = () => {
                
        let oldArray = [];
        setCompanyID((oldID) => oldID + 1); //Not working...
        //This gets the old array, with initializing the array? It still works though.. <--- REVIEW THIS --->
        if(companyName=='' || jobPosition=='' || jobSchedule=='' || tags=='') {
            setIsEmpty(true);
        }
        else {
            let theTags = tags.split(",");
            oldArray = [...companyNameArray, {id: companyID, company: companyName, position: jobPosition, schedule: jobSchedule, tag: theTags}];
            setCompanyNameArray(oldArray);
        }
        
        
    }

    const eachList = (i) => {
        return (
            //Since it is objects, make sure you add a the index.??? to update the object
            <div key={i.id}>
                <Job key={i} index={i.id} theCompanyName={i.company} theJobPosting={i.position} theTypeOfSchedule={i.schedule} theJobTags={i.tag}/>
            </div>
        );
    }

    return(
        <div className={classes.Filter}>
            <Container>
                <div>
                    {isEmpty===true?
                        <p>Please enter a value on all fields</p>
                        :null
                    }
                    <Forms addToFilter={addFilter} companyNameValue={handleCompanyName} jobPostingValue={handleJobPosting} jobSchedule={handleJobSchedule}
                        jobTags={handleTags}/>
                    {companyNameArray.map(eachList)}
                    
                </div>
            </Container>
        </div>
    )
}

export default Layout