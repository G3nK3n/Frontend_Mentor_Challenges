import React from 'react';
import Chrome from '../../../logo-chrome.svg';
import Firefox from '../../../logo-firefox.svg';
import Opera from '../../../logo-opera.svg';

import classes from '../ExtensionsList/ExtensionsList.module.css';

const extensionslist = () => {
    return(
        <div>
            <div className={classes.OuterList}>
                <ul className={classes.TheList}>
                    <li>
                        <img src={Chrome} />
                        <h6>Add to chrome</h6>
                        <p>Minimum version 6.2</p>
                    </li>
                    <li>
                        <img src={Firefox} />
                        <h6>Add to Firefox</h6>
                        <p>Minimum version 5.5</p>
                    </li>
                    <li>
                        <img src={Opera} />
                        <h6>Add to Opera</h6>
                        <p>Minimum version 4.6</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default extensionslist;