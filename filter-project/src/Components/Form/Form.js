import React from "react";
import classes from './Form.module.css';


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Forms = (props) => {
    
    return(
        <div className={classes.theForm}>
            <Form>
                {/* Cant figure out how to clear form after adding to filter */}
                <Form.Control onChange={props.companyNameValue} placeholder="Company Name" type="name" />
                <br />
                <Form.Control onChange={props.jobPostingValue} placeholder="Job Position" type="position" />
                <br />
                <Form.Control onChange={props.jobSchedule} placeholder="Full-Time or Part-Time?" type="schedule" />
                <br />
                <Form.Control onChange={props.jobTags} placeholder="Tags(Add a comma after each tag)" type="tags" />
                <br />
                <div className={classes.addButton}>
                    <Button onClick={props.addToFilter} type="button">Add</Button>
                </div>
            </Form>
        </div>
    )
}

export default Forms;