import React, {Component} from 'react';
import classes from '../Features/Features.module.css';

import Bookmarking from '../Features/Tabs/Bookmarking';
import Speedy from '../Features/Tabs/Speedy';
import Sharing from '../Features/Tabs/Sharing';

class Features extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bookmarking: false,
            searching: false,
            sharing: false
        }
    }
    
    getBookmarking = () => {
        this.setState({bookmarking:true, searching:false, sharing:false});
    }

    getSearching = () => {
        this.setState({bookmarking:false, searching:true, sharing:false});
    }

    getSharing = () => {
        this.setState({bookmarking:false, searching:false, sharing:true});
    }
    

    render() {
        
        let thePage = null;

        if(this.state.bookmarking) {
            thePage= (
                <div>
                    <Bookmarking />
                </div>
            )
        }
        else if(this.state.searching) {
            thePage= (
                <div>
                    <Speedy />
                </div>
            )
        }
        else if(this.state.sharing) {
            thePage= (
                <div>
                    <Sharing />
                </div>
            )
        }
            


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
                    <a href="javascript:void(0);" onClick={this.getBookmarking} >Simple Bookmarking</a>
                    <a href="javascript:void(0);" onClick={this.getSearching}>Speedy Searching</a>
                    <a href="javascript:void(0);" onClick={this.getSharing}>Easy Sharing</a>
                </div>
                <div className={classes.TabsInfo}>
                    {thePage}
                </div>
                
            </div>
        )
    }
}

export default Features;
