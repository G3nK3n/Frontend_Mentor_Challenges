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

    const deleteNumber = () => {
        let previous = output.slice(0, output.length-1);
        setOutput(previous);
    }

    const resetCalculator = () => {
        setOutput('');
    }

    //NOTE: You cannot use a callback event(Such as onClick) on a Custom component. Worse comes to worse, 
    //you can just surround that custom component with a div and add the callback event there(Lazy way?)
    return(
        <div className={classes.OuterButtonLayout}>
            <div className={classes.ButtonLayout}>
                <Buttons testClick={outputScreen}>7</Buttons>
                <Buttons testClick={outputScreen}>8</Buttons>
                <Buttons testClick={outputScreen}>9</Buttons>
                <div onClick={deleteNumber}>
                    <Buttons>DEL</Buttons>
                </div>
                <Buttons testClick={outputScreen}>4</Buttons>
                <Buttons testClick={outputScreen}>5</Buttons>
                <Buttons testClick={outputScreen}>6</Buttons>
                <div>
                    <Buttons>+</Buttons>
                </div>
                <Buttons testClick={outputScreen}>1</Buttons>
                <Buttons testClick={outputScreen}>2</Buttons>
                <Buttons testClick={outputScreen}>3</Buttons>
                <div>
                    <Buttons>-</Buttons>
                </div>
                <div>
                    <Buttons>.</Buttons>
                </div>
                <Buttons testClick={outputScreen}>0</Buttons>
                <div>
                    <Buttons>/</Buttons>
                </div>
                <div>
                    <Buttons>x</Buttons>
                </div>
                <p>{output}</p>
            </div>
            <div className={classes.ButtonLayout2}>
                <div onClick={resetCalculator}>
                    <Buttons2>RESET</Buttons2>
                </div>
                <div>
                    <Buttons2>=</Buttons2>
                </div>
            </div>
        </div>
    )
}

export default ButtonLayout;