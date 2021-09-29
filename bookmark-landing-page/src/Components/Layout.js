import React, {Component} from 'react';
import Header from './Header/Header';
import MainPage from './MainPage/MainPage';
import Features from './Features/Features';
import Extensions from './Extensions/Extensions';

import classes from '../Components/Layout.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Layout extends Component {


    render() {
        return(
            <div>
                <Container className={classes.Layout}>          
                    <Header />
                    <MainPage />
                    <Features />
                    <Extensions />
                </Container>
            </div>
        )
    }
}

export default Layout;