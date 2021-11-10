import React, { useState } from "react";
import classes from '../Contact/Contact.module.css';
import Button from 'react-bootstrap/Button';

const Contact = () => {
    const [contact, getContact] = useState('')
    const [error, setError] = useState(false)

    const checkEmail = () => {
        // let getEmail = contact.split("@");
        let getEmail = contact;
        if(getEmail.includes("@") && getEmail.includes(".com")) {
            setError(false);
            console.log(true);
        }
        else {
            setError(true)
            console.log(false);
        }

        console.log(getEmail);
    }

    const getEmail = (e) => {
        getContact(e.target.value);
    }


    
    return(
        <div className={classes.OuterContact}>
            <div className={classes.ContactText}>
                <p>35,000+ already joined</p>
                <h1>Stay up-to-date with that we're doing</h1>
            </div>
            <div className={classes.ContactForm}>
                <div className={classes.innerContact}>
                    <input type="text" onChange={(oldState) => getEmail(oldState)}/>
                    {error===true &&
                        <p>
                            Please make sure its an email
                        </p>
                    }
                </div>
                <Button onClick={checkEmail}>Contact Us</Button>
            </div>
        </div>
    );
}

export default Contact;