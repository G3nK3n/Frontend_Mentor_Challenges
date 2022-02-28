import React from "react";
import Home from './Home/Home';
import Header from './Header/Header';
import classes from './Layout.module.css';

const Layout = () => {
    return(
        <div className={classes.BackgroundImage}>
            <Header />
            <Home />
        </div>
    )
}

export default Layout;