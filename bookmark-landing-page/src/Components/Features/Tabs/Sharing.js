import React from 'react';
import classes from '../Tabs/Sharing.module.css';
import Img1 from '../../../illustration-features-tab-3.svg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const easysharing = () => {
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
                            
                            <h1>Share your bookmarks</h1>
                            <p>
                                Easily share your bookmarks and collections with others. Create a shareable link that you can send 
                                at the click of a button.
                            </p>
                            <Button className={classes.InfoButton}>More Info</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default easysharing;