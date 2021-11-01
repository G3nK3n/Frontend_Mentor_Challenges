import React from 'react';
import classes from '../Questions/Questions.module.css';
import Icon from '../../icon-arrow.svg';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { useState } from 'react';

const Questions = () => {
    
    const [getBookmark, setBookmark] = useState(false);
    const [getRequest, setRequest] = useState(false);
    const [getMobileApp, setMobileApp] = useState(false);
    const [getChromium, setChromium] = useState(false);


    const showBookmark = () => {
        setBookmark(old => !old);
    }
    
    const showRequest = () => {
        setRequest(old => !old);
    }
    
    const showMobileApp = () => {
        setMobileApp(old => !old);
    }
    
    const showChromium = () => {
        setChromium(old => !old);
    }


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
                        <ul>
                            <li>
                                <div className={classes.InnerList}>
                                    <a onClick={showBookmark} href="javascript:void(0);">
                                        <h6>What is Bookmark?</h6>
                                        <img src={Icon} />
                                    </a>
                                    {getBookmark===true &&
                                    
                                        <div className={classes.getBookmark}>
                                            <p>
                                                This section will be for bookmark information!
                                            </p>
                                        </div>
                                    }
                                </div>

                            </li>
                            <li>
                                <div className={classes.InnerList}>
                                    <a onClick={showRequest} href="javascript:void(0);">
                                        <h6>How can I request a new browser?</h6>
                                        <img src={Icon} />
                                    </a>
                                    {getRequest===true &&
                                    
                                    <div className={classes.getBookmark}>
                                        <p>
                                            This section will be for request information!
                                        </p>
                                    </div>
                                }
                                </div>
                            </li>
                            <li>
                                <div className={classes.InnerList}>
                                    <a onClick={showMobileApp} href="javascript:void(0);">
                                        <h6>Is there a mobile app?</h6>
                                        <img src={Icon} />
                                    </a>
                                    {getMobileApp===true &&
                                    
                                    <div className={classes.getBookmark}>
                                        <p>
                                            This section will be for mobile App information!
                                        </p>
                                    </div>
                                }
                                </div>
                            </li>
                            <li>
                                <div className={classes.InnerList}>
                                    <a onClick={showChromium} href="javascript:void(0);">
                                        <h6>What about other Chromium browsers?</h6>
                                        <img src={Icon} />
                                    </a>
                                    {getChromium===true &&
                                    
                                    <div className={classes.getBookmark}>
                                        <p>
                                            This section will be for chromium information!
                                        </p>
                                    </div>
                                }
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.MoreInfoButton}>
                        <Button>More Info</Button>
                    </div>
                </Col>
            </Row>
            
        </div>
    )
}

export default Questions;