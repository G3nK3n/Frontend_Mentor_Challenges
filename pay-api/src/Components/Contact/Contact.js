import React, {useState} from "react";
import Feedback from 'react-bootstrap/Feedback'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from '../Contact/Contact.module.css';

import Google from '../../google.svg';
import HP from '../../hewlett-packard.svg';
import Microsoft from '../../microsoft.svg';
import Nvidia from '../../nvidia.svg';
import Oracle from '../../oracle.svg';
import Tesla from '../../tesla.svg';

const Contact = () => {

    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})

    const setField = (field, value) => {
        setForm({
            ...form, 
            [field]:value
        })

        //If there are no errors while onChanging, then set errors object to null
        if(!!errors[field]) {
            setErrors({
                ...errors, 
                [field]:null
            })
        }
    }

    const validateForm = (e) => {
        
        const {name, email, companyName, title, messages} = form;

        const newErrors = {}

        if(!name || name === '') {
            newErrors.name = "Please enter your name";
        }

        if(!email || email === '') {
            newErrors.email = "Please enter an email";
        }
        
        if(!companyName || companyName === '') {
            newErrors.companyName = "Please enter the company name";
        }

        if(!title || title === '') {
            newErrors.title = "Please enter the company name";
        }

        if(!messages || messages === '') {
            newErrors.messages = "Please enter the company name";
        }
        

        return newErrors;

    }

    const handleSubmit  = (e) => {
        e.preventDefault();

        const formErrors = validateForm(e);

        //If there are errors, then set the erros object
        if(Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        }
        else {
            alert("Form sent!");
        }
    }


    return(
        <div className={classes.MainContactDiv}>
            <Container>
                <Row>
                    <Col>
                        <div className={classes.MainTitle}>
                            <h1>Submit a help request and we'll get in touch shortly.</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={classes.ContactForm}>
                            <Form>
                                <Form.Group controlId="formBasicName">
                                    <Form.Control onChange={(e) => setField('name', e.target.value)} isInvalid={!!errors.name} name="name" required type="name" placeholder="Name" />
                                </Form.Group>
                                <Form.Control.Feedback type='invalid'>
                                    {errors.name}
                                </Form.Control.Feedback>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control onChange={(e) => setField('email', e.target.value)} isInvalid={!!errors.email} name="email" required type="email" placeholder="Email Address" />
                                </Form.Group>
                                <Form.Control.Feedback type='invalid'>
                                    {errors.email}
                                </Form.Control.Feedback>
                                <Form.Group controlId="formBasicCompanyName">
                                    <Form.Control onChange={(e) => setField('companyName', e.target.value)} isInvalid={!!errors.companyName} name="companyName" required type="company_name" placeholder="Company Name" />
                                </Form.Group>
                                <Form.Control.Feedback type='invalid'>
                                    {errors.companyName}
                                </Form.Control.Feedback>
                                <Form.Group controlId="formBasicTitle">
                                    <Form.Control onChange={(e) => setField('title', e.target.value)} isInvalid={!!errors.title} name="title" required type="title" placeholder="Title" />
                                </Form.Group>
                                <Form.Control.Feedback type='invalid'>
                                    {errors.title}
                                </Form.Control.Feedback>
                                <Form.Group controlId="formBasicMessage">
                                    <Form.Control onChange={(e) => setField('messages', e.target.value)} isInvalid={!!errors.messages} name="messages" required as="textarea" row={4} type="message" placeholder="Message" />
                                </Form.Group>
                                <Form.Control.Feedback type='invalid'>
                                    {errors.messages}
                                </Form.Control.Feedback>
                                <Form.Group>
                                    <Form.Check 
                                        className={classes.CheckBox}
                                        type="checkbox"
                                        label="Stay up-to-date with company announcements and updates to our API"
                                    />
                                </Form.Group>
                                <Button type="button" onClick={handleSubmit}>Submit</Button>
                            </Form>
                        </div>
                    </Col>
                    <Col>
                        <div className={classes.RightSideContact}>
                            <h3>Join the thousands of innovators already building with us</h3>
                            <ul>
                                <li><img src={Tesla} /></li>
                                <li><img src={Microsoft} /></li>
                                <li className={classes.HP}><img src={HP} /></li>
                            </ul>
                            <ul>
                                <li><img src={Oracle} /></li>
                                <li className={classes.Google}><img src={Google} /></li>
                                <li className={classes.Nvidia}><img src={Nvidia} /></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact;