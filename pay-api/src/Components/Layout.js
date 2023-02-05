import React from "react";

import Header from "./Header/Header";
import Home from './Home/Home';
import Pricing from './Pricing/Pricing';
import About from './About/About';
import Footer from './Footer/Footer';
import Contact from './Contact/Contact';

import {Routes, Route} from 'react-router-dom';

const Layout = () => {
    return(
        <div>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/pricing" element={<Pricing />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Layout;