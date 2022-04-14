import React from "react";
import classes from './Modal.module.css';
import Close from '../../icon-close.svg';

const Modal = (props) => {
    return(
        <div className={classes.Modal}>
            <div className={classes.Links}>
                <ul>
                    <li><a href="#"><span><div><b>00</b>Home</div></span></a></li>
                    <li><a href="#"><span><div><b>01</b>Destination</div></span></a></li>
                    <li><a href="#"><span><div><b>02</b>Crew</div></span></a></li>
                    <li><a href="#"><span><div><b>03</b>Technology</div></span></a></li>
                </ul>
            </div>
            <div onClick={props.closeIcon}>
                <img className={classes.Close} src={Close} />
            </div>
        </div>
    )
}

export default Modal;