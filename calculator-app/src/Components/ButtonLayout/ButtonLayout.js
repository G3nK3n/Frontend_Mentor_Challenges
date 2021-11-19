import React, {useState} from "react";
import Buttons from '../Buttons/Buttons';
import Buttons2 from '../Buttons/Buttons2';

import classes from '../ButtonLayout/ButtonLayout.module.css';

const ButtonLayout = () => {
    
    const [output, setOutput] = useState('');

    const outputScreen = (e) => {
        let previous = output;
        setOutput(previous+e.target.value);
    }

    return(
        <div className={classes.OuterButtonLayout}>
            <div className={classes.ButtonLayout}>
                <Buttons testClick={outputScreen}>7</Buttons>
                <Buttons testClick={outputScreen}>8</Buttons>
                <Buttons testClick={outputScreen}>9</Buttons>
                <Buttons>DEL</Buttons>
                <Buttons testClick={outputScreen}>4</Buttons>
                <Buttons testClick={outputScreen}>5</Buttons>
                <Buttons testClick={outputScreen}>6</Buttons>
                <Buttons>+</Buttons>
                <Buttons testClick={outputScreen}>1</Buttons>
                <Buttons testClick={outputScreen}>2</Buttons>
                <Buttons testClick={outputScreen}>3</Buttons>
                <Buttons>-</Buttons>
                <Buttons>.</Buttons>
                <Buttons testClick={outputScreen}>0</Buttons>
                <Buttons>/</Buttons>
                <Buttons>x</Buttons>
                <p>{output}</p>
            </div>
            <div className={classes.ButtonLayout2}>
                <Buttons2>RESET</Buttons2>
                <Buttons2>=</Buttons2>
            </div>
        </div>
    )
}

export default ButtonLayout;