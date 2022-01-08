import React from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Forms = (props) => {

    
    return(
        <div>
            <Form>
                <Form.Label>Company Name</Form.Label>
                <Form.Control onChange={props.companyNameValue} type="name" />
                <Form.Label>Job Position</Form.Label>
                <Form.Control type="position" />
                <Form.Label>Work Schedule</Form.Label>
                <Form.Control type="schedule" />
                <Form.Label>Tags</Form.Label>
                <Form.Control type="tags" />
                <Button onClick={props.addFilter} type="button">Add</Button>
            </Form>
        </div>
    )
}

export default Forms;