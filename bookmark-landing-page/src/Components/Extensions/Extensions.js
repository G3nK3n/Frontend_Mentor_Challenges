import React from 'react';
import classes from '../Extensions/Extensions.module.css';

import ExtensionsList from './ExtensionsList/ExtensionsList';

const extensions = () => {
    
    return(
        <div className={classes.Extensions}>
            <div className={classes.ExtensionsTitle}>
                <h1>Download the extensions</h1>
                <p>
                    We've got more browsers in the pipeline. Please do let us know if you've got 
                    a favorite you'd like us to prioritize.
                </p>
            </div>

            <div>
                <ExtensionsList />
            </div>
        </div>
    )
}

export default extensions;