import React from "react";
import ButtonLayout from './ButtonLayout/ButtonLayout';
import classes from '../Components/Layout.module.css';

export default function layout() {
    return(
        <div className={classes.Layout}>
            <ButtonLayout />
        </div>
    )
}

