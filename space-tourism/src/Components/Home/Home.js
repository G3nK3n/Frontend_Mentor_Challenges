import React from "react";
import classes from '../Home/Home.module.css';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
    return(
        <div className={classes.HomePage}>
            <Container>
                <div className={classes.HomeText}>
                    <h5>So, You want to travel to</h5>
                    <h1>Space</h1>
                    <p>
                        Lets face it: if you want to go to space, you might as well genuinly go to outer space
                        and not hover kind of on the edge of it. Well sit back, and relax because we'll give you 
                        a truly out of this world experience!
                    </p>
                </div>
            </Container>
        </div>
    )
    //Layout might be the good spot to change background image according to links
}

export default Home;

