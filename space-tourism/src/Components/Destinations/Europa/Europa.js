import React from "react";
import classes from "./Europa.module.css";
import Img1 from "../../../image-europa.png";

const Europa = () => {
    return(
        <div className={classes.Europa}>
            <div className={classes.MainText}>
                <h1>Europa</h1>
                <p className={classes.Paragraphs}>
                    The smalles of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream.
                    With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation
                    in your snug wintery cabin.
                </p>
            </div>
            
            <div className={classes.Description}>
                <h5>Avg. Distance</h5>
                <p>628 MIL KM</p>
            </div>
            <div className={classes.Description}>
                <h5>Est. Travel Time</h5>
                <p>3 YEARS</p>
            </div>
            <div className={classes.Image}>
                <img src={Img1} />
            </div>
            
        </div>
    )
}

export default Europa;