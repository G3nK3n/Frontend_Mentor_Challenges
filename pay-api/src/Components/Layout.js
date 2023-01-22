import React from "react";

import MainBody from './Home/MainBody';
import Partners from './Home/Partners';
import BottomSection from "./Home/BottomSection";


const Layout = () => {
    return(
        <div>
            <MainBody />
            <Partners />
            <BottomSection />
        </div>
    )
}

export default Layout;