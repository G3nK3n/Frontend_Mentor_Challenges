import React from 'react';
import classes from '../Questions/Questions.module.css';
import Icon from '../../icon-arrow.svg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const questions = () => {
    return(
        <div className={classes.Questions}>
            <Row> 
                <Col>
                    <div className={classes.QuestionsTitle}>
                        <h1>Frequently Asked Questions</h1>
                        <p>
                            Here are some of our FAQ's. If you have any other questions you'd like answered please feel free to email us.
                        </p>
                    </div>
                    <div className={classes.ListOfQuestions}>
                        
                        {/* USE DSIPLAY INLINE-BLOCK */}
                        <ul>
                            <li>
                                <h6>What is Bookmark?</h6>
                                <div> 
                                    <img src={Icon} />
                                </div>
                                
                            </li>
                            <li>
                                <h6>How can I request a new browser?</h6>
                                <img src={Icon} />
                            </li>
                            <li>
                                <h6>Is there a mobile app?</h6>
                                <img src={Icon} />
                            </li>
                            <li>
                                <h6>What about other Chromium browsers?</h6>
                                <img src={Icon} />
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
            
        </div>
    )
}

export default questions;