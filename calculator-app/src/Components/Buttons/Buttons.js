import React from "react";
import classes from '../Buttons/Buttons.module.css';

const Buttons = (props) => {
    return(
        <div className={classes.Button}>
            <p>{props.children}</p>
        </div>
    )
}

export default Buttons;