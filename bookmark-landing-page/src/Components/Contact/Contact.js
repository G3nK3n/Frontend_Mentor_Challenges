import React from "react";
import classes from '../Contact/Contact.module.css';
import Button from 'react-bootstrap/Button';

const contact = () => {
    return(
        <div className={classes.OuterContact}>
            <div className={classes.ContactText}>
                <p>35,000+ already joined</p>
                <h1>Stay up-to-date with that we're doing</h1>
            </div>
            <div className={classes.ContactForm}>
                <input type="text" />
                <Button>Contact Us</Button>
            </div>
        </div>
    );
}

export default contact;