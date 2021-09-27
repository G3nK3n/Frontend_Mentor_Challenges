import React from 'react';
import classes from '../Tabs/Speedy.module.css';
import Img1 from '../../../illustration-features-tab-2.svg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const speedy = () => {
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
                    <Col>
                        <div className={classes.RightSide}>
                            
                            <h1>Intelligent search</h1>
                            <p>
                                Our powerful  search feature will help find you saved sites in no time at all. No need to trawl through all 
                                of your bookmarks.
                            </p>
                            <Button className={classes.InfoButton}>More Info</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default speedy;