import React from "react";
import classes from '../Job/Job.module.css';

const Jobs = () => {
    return(
        //TRY ADDING DYNAMICALLY
        <div className={classes.Jobs}>
            <div className={classes.JobDescription}>
                <h2>Photoshop</h2>
                <h1>Senior Frontend Developer</h1>
                <h5>Full time - USA Only</h5>
            </div>

            <div className={classes.Tags}>
                <h2>Frontend</h2>
                <h2>Senior</h2>
                <h2>HTML</h2>
                <h2>CSS</h2>
                <h2>JavaScript</h2>
            </div>
        </div>
    )
}

export default Jobs;