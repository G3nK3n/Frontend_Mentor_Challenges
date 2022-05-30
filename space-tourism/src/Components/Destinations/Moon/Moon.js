import React from "react";
import classes from "./Moon.module.css";

const Moon = () => {
    return(
        <div className={classes.Moon}>
            <div className={classes.MainText}>
                <h1>Moon</h1>
                <p className={classes.Paragraphs}>
                    See our planet as you've never seen it before.
                    A perfect relaxing trip away to help regain perspective and come back refreshed.
                    While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
                </p>
            </div>
            
            <div className={classes.Description}>
                <h5>Avg. Distance</h5>
                <p>384,400 KM</p>
            </div>
            <div className={classes.Description}>
                <h5>Est. Travel Time</h5>
                <p>3 Days</p>
            </div>
            
        </div>
    )
}

export default Moon;