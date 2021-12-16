import React, {useState, useEffect} from "react";
import Buttons from '../Buttons/Buttons';
import Buttons2 from '../Buttons/Buttons2';

import classes from '../ButtonLayout/ButtonLayout.module.css';

const ButtonLayout = () => {
    
    const [output, setOutput] = useState('');
    const [mathOps, setMathOps] = useState('');
    const [storedNumbers, setStoredNumbers] = useState(0);
    const [equalsSign, setEqualSign] = useState(false);

    const outputScreen = (e) => {
        if(equalsSign == true) {
            setOutput('');
            setEqualSign(false);
        }
        let previous = output;
        setOutput(previous+e.target.value);
    }

    const deleteNumber = () => {
        let previous = output.slice(0, output.length-1);
        setOutput(previous);
    }

    const resetCalculator = () => {
        setOutput('');
        setStoredNumbers(0);
    }

    useEffect(() => {
        setStoredNumbers(0);
        setMathOps('');
    }, [])

    const calculating = (e) => {

        let tempNumber = storedNumbers;

        if(mathOps === '') {
            setMathOps(String(e.target.value));
            
            if(tempNumber == 0) {
                setStoredNumbers(output);
                setOutput('');
            }
        }
        else {
            if(mathOps === "+") {
                setStoredNumbers(String(Number(tempNumber) + Number(output)));
                setOutput('');
                setMathOps(String(e.target.value));
            }
            else if(mathOps === "-") {
                setStoredNumbers(String(Number(tempNumber) - Number(output)));
                setOutput('');
                setMathOps(String(e.target.value));
            }
            else if(mathOps === "x") {
                setStoredNumbers(String(Number(tempNumber) * Number(output)));
                setOutput('');
                setMathOps(String(e.target.value));
            }
            else if(mathOps === "/") {
                setStoredNumbers(String(Number(tempNumber) / Number(output)));
                setOutput('');
                setMathOps(String(e.target.value));
            }
            
            // if(equalsSign == true) {
            //     if(mathOps === "+") {
            //         setStoredNumbers(String(Number(tempNumber) + Number(output)));
            //         setOutput('');
                    
            //     }
            //     // else if(mathOps === "-") {
            //     //     setStoredNumbers(String(Number(tempNumber) - Number(output)));
            //     //     setOutput('');
                   
            //     // }
            //     // else if(mathOps === "x") {
            //     //     setStoredNumbers(String(Number(tempNumber) * Number(output)));
            //     //     setOutput('');
                    
            //     // }
            //     // else if(mathOps === "/") {
            //     //     setStoredNumbers(String(Number(tempNumber) / Number(output)));
            //     //     setOutput('');
                    
            //     // }

            // }

            
            
        }
    
    }

    const clickEqual = (e) => {
        setEqualSign(true);
        calculating(e);
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
                <div onClick={calculating}>
                    <Buttons>+</Buttons>
                </div>
                <Buttons testClick={outputScreen}>1</Buttons>
                <Buttons testClick={outputScreen}>2</Buttons>
                <Buttons testClick={outputScreen}>3</Buttons>
                <div onClick={calculating}>
                    <Buttons>-</Buttons>
                </div>
                <div>
                    <Buttons testClick={outputScreen}>.</Buttons>
                </div>
                <Buttons testClick={outputScreen}>0</Buttons>
                <div onClick={calculating}>
                    <Buttons>/</Buttons>
                </div>
                <div onClick={calculating}>
                    <Buttons>x</Buttons>
                </div>
                <p>{output}</p>
                {storedNumbers}
            </div>
            <div className={classes.ButtonLayout2}>
                <div onClick={resetCalculator}>
                    <Buttons2>RESET</Buttons2>
                </div>
                <div onClick={clickEqual}>
                    <Buttons2>=</Buttons2>
                </div>
            </div>
        </div>
    )
}

export default ButtonLayout;