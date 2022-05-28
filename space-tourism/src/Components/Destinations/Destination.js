import React from "react";
import classes from "./Destination.module.css";
import Moon from './Moon/Moon';

import { Switch, Route, Link } from 'react-router-dom';

const Destination = () => {
    return(
        <div>
            <div className={classes.Subtitle}><span>01</span><p>Pick your destination</p></div>
            <div className={classes.Links}>
                <ul>
                    <li><Link to={"/destination/moon"}><div>Moon</div></Link></li>
                    <li><Link to={"/destination/mars"}><div>Mars</div></Link></li>
                    <li><Link to={"/destination/europa"}><div>Europa</div></Link></li>
                    <li><Link to={"/destination/titan"}><div>Titan</div></Link></li>
                </ul>
                <Switch>
                    <Route exact path='/destination/moon'>
                        <Moon />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Destination;