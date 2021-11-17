import React from "react";
import classes from '../Buttons/Buttons2.module.css';
import Button from 'react-bootstrap/Button';

const button2 = (props) => {
    return(
        <div className={classes.Buttons2}>
            <Button>{props.children}</Button>
        </div>
    )
}

export default button2;