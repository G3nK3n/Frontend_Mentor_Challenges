import React from "react";
import classes from "./Titan.module.css";
import Img1 from "../../../image-titan.png";

const Titan = () => {
    return(
        <div className={classes.Titan}>
            <div className={classes.MainText}>
                <h1>Titan</h1>
                <p className={classes.Paragraphs}>
                    The only moon known to have a dense atmosphere other than Earth, Titan is a home away from
                    home(just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
                </p>
            </div>
            
            <div className={classes.Description}>
                <h5>Avg. Distance</h5>
                <p>1.6 BIL KM</p>
            </div>
            <div className={classes.Description}>
                <h5>Est. Travel Time</h5>
                <p>7 YEARS</p>
            </div>
            <div className={classes.Image}>
                <img src={Img1} />
            </div>
            
        </div>
    )
}

export default Titan;