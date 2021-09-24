import React from 'react';
import classes from '../Tabs/Bookmarking.module.css';
import Img1 from '../../../illustration-features-tab-1.svg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const bookmarking = () => {
    
    return(
        <div>
            <div>
                <Row>
                    <Col xl={6}>
                        <div className={classes.backgroundDiv}>
                        </div>
                        
                        <div className={classes.mainImage}>
                            <img src={Img1} />    
                        </div>
                    </Col>
                    <Col xl={6}>
                        <div className={classes.RightSide}>
                            
                            <h1>Bookmark in one click</h1>
                            <p>
                                Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete 
                                control over how you manage your favorite sites.
                            </p>
                            <Button className={classes.InfoButton}>More Info</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>    
    )
    
}

export default bookmarking;