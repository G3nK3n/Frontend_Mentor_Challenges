import React from "react";
import classes from "./Mars.module.css";
import Img1 from "../../../image-mars.png";

const Mars = () => {
    return(
        <div className={classes.Mars}>
            <div className={classes.MainText}>
                <h1>Mars</h1>
                <p className={classes.Paragraphs}>
                    Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the
                    tallest planetary mountain in our solar system. It's two and a half times the size of Everest!
                </p>
            </div>
            
            <div className={classes.Description}>
                <h5>Avg. Distance</h5>
                <p>225 MIL KM</p>
            </div>
            <div className={classes.Description}>
                <h5>Est. Travel Time</h5>
                <p>9 MONTHS</p>
            </div>
            <div className={classes.Image}>
                <img src={Img1} />
            </div>
            
        </div>
    )
}

export default Mars;