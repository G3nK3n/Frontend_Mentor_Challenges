import React, { useState } from "react";
import classes from './Crew.module.css';

const Crew = () => {
    
    const [crewName, setCrewName] = useState("");

    const checkNames = (i) => {

    }

    return(
        <div>
            <div className={classes.Subtitle}><span>02</span><p>Meet your crew</p></div>
            <div className={classes.RadioButton}>
                <ul>
                    {/* FIX THIS */}
                    <li><span onClick={(test) => checkNames(this.value)} value={"Douglas"} className={classes.Dot}></span></li>
                    <li><span className={classes.Dot}></span></li>
                    <li><span className={classes.Dot}></span></li>
                    <li><span className={classes.Dot}></span></li>
                </ul>
            </div>
        </div>
    )
}

export default Crew;