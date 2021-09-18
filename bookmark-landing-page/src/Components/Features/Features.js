import React, {Component} from 'react';
import classes from '../Features/Features.module.css';

class Features extends Component {

    render() {
        return(
            <div className={classes.Features}>
                <div className={classes.FeaturesTitle}>
                    <h1>Features</h1>
                    <p>
                        Our aim is to make it quick and easy for you to access your
                        favorite websites. Your bookmarks sync between your devices so you 
                        can access them on the go.
                    </p>
                </div>
                <div className={classes.Tabs}>
                    <a href="#" >Simple Bookmarking</a>
                    <a href="#" >Speedy Searching</a>
                    <a href="#" >Easy Sharing</a>
                </div>
            </div>
        )
    }
}

export default Features;
