import React from "react";
import classes from './Crew.module.css';
import Douglas from './Douglas/Douglas';
import { Switch, Route, Link } from 'react-router-dom';

const Crew = () => {

    return(
        <div>
            <div className={classes.Subtitle}><span>02</span><p>Meet your crew</p></div>
            <div className={classes.RadioButton}>
                <ul>
                    <li><Link to={"/crew/douglas"}><span className={classes.Dot}></span></Link></li>
                    <li><span className={classes.Dot}></span></li>
                    <li><span className={classes.Dot}></span></li>
                    <li><span className={classes.Dot}></span></li>
                </ul>
                <Switch>
                    <Route exact path='/crew/douglas'>
                        <Douglas />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Crew;