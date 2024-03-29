import React from "react";
import Image_Douglas from '../../../image-douglas-hurley.png';
import classes from './Douglas.module.css';

const Douglas = () => {
    return(
        <div className={classes.Douglas}>
            <h2>Commander</h2>
            <h1>Douglas Hurley</h1>
            <div className={classes.crewDescription}>
                <p>
                    Douglas Gerarld Hurley us an American engineer, former Marinee Corps pilot and former NASA astronaut.
                    He launched into space for the third time as commander of Crew Dragon Demo-2.
                </p>
            </div>

            <img alt="Douglas" src={Image_Douglas} />
            {/* FIX LOGO MARGIN FOR 1440px SCREENS */}
        </div>
    )
}

export default Douglas;