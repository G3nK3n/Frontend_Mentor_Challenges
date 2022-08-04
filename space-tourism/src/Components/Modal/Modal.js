import React from "react";
import classes from './Modal.module.css';
import Close from '../../icon-close.svg';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import Home from '../Home/Home';
import Destination from '../Destinations/Destination';

const Modal = (props) => {
    
    const location = useLocation().pathname;

    if(!props.show) {
        return null;
    }
    else {
        return(
            <div className={classes.Modal}>
                
                <div className={classes.Links}>
                    <ul>
                        {/* <li onClick={props.test}><a href="#" ><span><div><b>00</b>Home</div></span></a></li> */}
                        <li><Link to={"/"}><span><div><b>00</b>Home</div></span></Link></li>
                        {/* <li><a href="#"><span><div><b>01</b>Destination</div></span></a></li> */}
                        <li><Link to={"/destination"}><span><div><b>01</b>Destination</div></span></Link></li>
                        {/* <li><a href="#"><span><div><b>02</b>Crew</div></span></a></li> */}
                        <li><Link to={"/crew"}><span><div><b>02</b>Destination</div></span></Link></li>
                        <li><a href="#"><span><div><b>03</b>Technology</div></span></a></li>
                    </ul>
                </div>
                
                <div onClick={props.closeIcon}>
                    <img className={classes.Close} src={Close} />
                </div>
                
            </div>
        )
    }
}

export default Modal;