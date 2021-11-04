import React, {Component} from 'react';
import Header from './Header/Header';
import MainPage from './MainPage/MainPage';
import Features from './Features/Features';
import Extensions from './Extensions/Extensions';
import Questions from './Questions/Questions';
import Contact from './Contact/Contact';

import classes from '../Components/Layout.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';

class Layout extends Component {


    render() {
        return(
            <div>
                <Container className={classes.Layout}>          
                    <Header />
                    <MainPage />
                    <Features />
                    <Extensions />
                    <Questions />
                    <Contact />
                </Container>
            </div>
        )
    }
}

export default Layout;