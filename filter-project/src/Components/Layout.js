import React, { useState, useEffect } from 'react';
import classes from '../Components/Layout.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import HeaderImage from '../bg-header-desktop.svg';

import Job from './Job/Job';
import Forms from './Form/Form';
import Button from 'react-bootstrap/Button';

const Layout = () => {
    
    const [companyID, setCompanyID] = useState(0);
    
    //Handle states
    const [companyName, setCompanyName] = useState('');
    const [jobPosition, setJobPosition] = useState('');
    const [jobSchedule, setJobSchedule] = useState('');
    const [tags, setTags] = useState([]);

    const [theFilter, setTheFilter] = useState('');

    const [dummyArray, setDummyArray] = useState([]);

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

    const handleFilter = e => {
        setTheFilter(e.target.value.toLowerCase());
    }

    const addTagToSearch = e => {
        if(!dummyArray.includes(e.target.innerText)) {
            setDummyArray(oldArray => [...oldArray, e.target.innerText]);
        }
        
    }

    const addFilter = () => {
        let oldArray = [];
        setCompanyID((oldID) => oldID + 1); //Not working...
        if(companyName==='' || jobPosition==='' || jobSchedule==='' || tags==='') {
            setIsEmpty(true);
        }
        else {
            //Split the tags into arrays while removing duplicate values and trim the unwanted spaces
            let theTags = tags.split(",");
            theTags = Array.from(new Set(theTags)); //Removed Duplicates
        
            //This gets the old array, with initializing the array? It still works though.. <--- REVIEW THIS --->
            oldArray = [...companyNameArray, {id: companyID, company: companyName, position: jobPosition, schedule: jobSchedule, tag: theTags}];
            setCompanyNameArray(oldArray);
            setIsEmpty(false);
        }
        
        
        
    }

    const eachList = (i) => {
        return (
            //Since it is objects, make sure you add a the index.??? to update the object
            <div key={i.id}>
                <Job addToSearch={addTagToSearch} key={i} index={i} theCompanyName={i.company} theJobPosting={i.position} theTypeOfSchedule={i.schedule} theJobTags={i.tag} closeJob={() => closeJobPosting(i)}/>
            </div>
        );
    }

    const closeTag = (value) => {
        //This filters out the specific item in the array
        setDummyArray(dummyArray.filter(item => item!== value));
    }

    //Checks if each job posting tags match the search tags
    const checkDummy = (theTags) => {
        let checkValue = false;
        console.log(theTags);
        dummyArray.map((dummyValue) => {
            if(theTags.includes(dummyValue)) {
                checkValue = true;
            }
            else {
                checkValue = false;
            }
        })

        if(checkValue==true) {
            return(dummyArray[0]);
        }
    }

    const clearDummyArray = () => {
        setDummyArray([]);
    }

    const closeJobPosting = (i) => {
        const someID = i.id;
        setCompanyNameArray(companyNameArray.filter(items => items.id !== someID));
    }

    return(
        <div className={classes.Filter}>
            <div className={classes.HeaderImage}><img src={HeaderImage}></img></div>
            <Container>
                <div>
                    {isEmpty===true?
                        <p>Please enter a value on all fields</p>
                        :null
                    }
                    <Forms addToFilter={addFilter} companyNameValue={handleCompanyName} jobPostingValue={handleJobPosting} jobSchedule={handleJobSchedule}
                        jobTags={handleTags}/>

                    <div className={classes.searchBar}>
                        {dummyArray.map((values) => {
                            return (
                                <div key={values} className={classes.outerTagDiv}>
                                    <div className={classes.searchTags}>
                                        {values}
                                    </div>
                                    <div onClick={() => closeTag(values)} className={classes.xButton}>
                                        X    
                                    </div>
                                </div>
                            )
                        })}
                        <div className={classes.buttonDiv}>
                            <Button onClick={clearDummyArray}>Clear</Button>
                        </div>
                    </div>

                    {/* This displays the job posting depending on the tags in the search bar, or shows everything if search bar is empty */}
                    {dummyArray.length > 0 ?        
                        companyNameArray.filter(allTags => allTags.tag.includes(checkDummy(allTags.tag))).map((values) => {
                            return(  
                            <div key={values.id}>
                                {eachList(values)}
                            </div>
                            )
                        }) : companyNameArray.map(eachList)
                    }
                </div>
            </Container>
        </div>
    )
}

export default Layout