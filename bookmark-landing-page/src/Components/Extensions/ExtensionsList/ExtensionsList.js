import React from 'react';
import Chrome from '../../../logo-chrome.svg';
import Firefox from '../../../logo-firefox.svg';
import Opera from '../../../logo-opera.svg';
import Dots from '../../../bg-dots.svg';


import classes from '../ExtensionsList/ExtensionsList.module.css';
import Button from 'react-bootstrap/Button';

const extensionslist = () => {
    return(
        <div>
            <div className={classes.OuterList}>
                <div className={classes.TheList}>
                    <img className={classes.SetImages} src={Chrome} />
                    <h6>Add to chrome</h6>
                    <p>Minimum version 6.2</p>
                    <img className={classes.Dots} src={Dots} />
                    <Button>Add & install Extension</Button>
                </div>
                <div className={classes.TheList}>
                    <img className={classes.SetImages} src={Firefox} />
                    <h6>Add to Firefox</h6>
                    <p>Minimum version 5.5</p>
                    <img className={classes.Dots} src={Dots} />
                    <Button>Add & install Extension</Button>
                </div>
                <div className={classes.TheList}>
                    <img className={classes.SetImages} src={Opera} />
                    <h6>Add to Opera</h6>
                    <p>Minimum version 4.6</p>
                    <img className={classes.Dots} src={Dots} />
                    <Button>Add & install Extension</Button>
                </div>
            </div>
        </div>
    )
}

export default extensionslist;