import React from "react";

import Header from "./Header/Header";
import Home from './Home/Home';
import Pricing from './Pricing/Pricing';
import About from './About/About';

import Footer from './Footer/Footer';

import {Routes, Route} from 'react-router-dom';

const Layout = () => {
    return(
        <div>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/pricing" element={<Pricing />} />
                <Route exact path="/about" element={<About />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Layout;