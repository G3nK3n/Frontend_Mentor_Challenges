import React from "react";
import classes from '../Buttons/Buttons.module.css';
import Button from 'react-bootstrap/Button';

const Buttons = (props) => {
    return(
        <div className={classes.Button}>
            <Button>{props.children}</Button>
        </div>
    )
}

export default Buttons;