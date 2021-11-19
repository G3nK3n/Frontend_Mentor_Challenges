import React from "react";
import classes from '../Buttons/Buttons.module.css';
import Button from 'react-bootstrap/Button';

const Buttons = (props) => {
    return(
        <div className={classes.Button}>
            <Button value={props.children} onClick={props.testClick}>{props.children}</Button>
        </div>
    )
}

export default Buttons;