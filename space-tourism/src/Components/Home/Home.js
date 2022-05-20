import React from "react";
import classes from '../Home/Home.module.css';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();


    return(
        <div className={classes.HomePage}>
            <Container>
                <h1>{location.pathname}</h1>
                <div className={classes.HomeText}>
                    <h5>So, You want to travel to</h5>
                    <h1>Space</h1>
                    <p>
                        Lets face it: if you want to go to space, you might as well genuinly go to outer space
                        and not hover kind of on the edge of it. Well sit back, and relax because we'll give you 
                        a truly out of this world experience!
                    </p>
                </div>

                <div className={classes.ExploreButton}>
                    <h4>EXPLORE</h4>
                </div>

                {/* Created a inner circle so that the Explore button will stay white
                    when hovering, making it seems like the ExploreButtonHover is behind
                    ExploreButton div. Doing this until I figure out how to make the 
                    divs go behind the other */}
                <div className={classes.ExploreButtonHover}>
                    <div className={classes.innerHover}></div>
                </div>

            </Container>
        </div>
    )
    //Layout might be the good spot to change background image according to links
}

export default Home;

