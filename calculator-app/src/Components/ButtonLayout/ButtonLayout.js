import React from "react";
import Buttons from '../Buttons/Buttons';
import Buttons2 from '../Buttons/Buttons2';

import classes from '../ButtonLayout/ButtonLayout.module.css';

const ButtonLayout = () => {
    return(
        <div className={classes.OuterButtonLayout}>
            <div className={classes.ButtonLayout}>
                <Buttons>7</Buttons>
                <Buttons>8</Buttons>
                <Buttons>9</Buttons>
                <Buttons>DEL</Buttons>
                <Buttons>4</Buttons>
                <Buttons>5</Buttons>
                <Buttons>6</Buttons>
                <Buttons>+</Buttons>
                <Buttons>1</Buttons>
                <Buttons>2</Buttons>
                <Buttons>3</Buttons>
                <Buttons>-</Buttons>
                <Buttons>.</Buttons>
                <Buttons>0</Buttons>
                <Buttons>/</Buttons>
                <Buttons>x</Buttons>
            </div>
            <div className={classes.ButtonLayout2}>
                <Buttons2>RESET</Buttons2>
                <Buttons2>=</Buttons2>
            </div>
        </div>
    )
}

export default ButtonLayout;