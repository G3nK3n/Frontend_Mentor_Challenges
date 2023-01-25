import React from "react";

import MainBody from './Home/MainBody';
import Partners from './Home/Partners';
import BottomSection from "./Home/BottomSection";
import Footer from './Footer/Footer';

const Layout = () => {
    return(
        <div>
            <MainBody />
            <Partners />
            <BottomSection />
            <Footer />
        </div>
    )
}

export default Layout;