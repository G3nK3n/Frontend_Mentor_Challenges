import React from 'react';
import classes from '../Tabs/Bookmarking.module.css';
import Img1 from '../../../illustration-features-tab-1.svg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const bookmarking = () => {
    
    return(
        <div>
            <div>
                <Row>
                    <Col>
                        <div className={classes.backgroundDiv}>
                        </div>
                        
                        <div className={classes.mainImage}>
                            <img src={Img1} />    
                        </div>
                    </Col>
                </Row>
            </div>
        </div>    
    )
    
}

export default bookmarking;