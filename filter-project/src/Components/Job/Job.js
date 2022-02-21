import React from "react";
import classes from '../Job/Job.module.css';

const Jobs = (props) => {
    return(
        //TRY ADDING DYNAMICALLY
        <div className={classes.Jobs}>
            <div className={classes.JobDescription}>
                {/* <h6>ID: {props.index}</h6> */}
                <h2>{props.theCompanyName}</h2>
                <h1>{props.theJobPosting}</h1>
                <h5>{props.theTypeOfSchedule} - Canada Only</h5>
            </div>
            <div onClick={props.closeJob} className={classes.closeJob}>
                <p>X</p>
            </div>
            {/* This map function outputs the tags from the parent component */}
            <div className={classes.Tags}>
                {props.theJobTags.map((values) => {
                return(
                        <h2 onClick={props.addToSearch} className={classes.theTags} key={values}>{values}</h2>
                    )
                })}
            </div>
            
        </div>
    )
}

export default Jobs;