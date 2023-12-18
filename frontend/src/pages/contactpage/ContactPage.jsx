import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './ContactPage.css'

const Contact = () => {
    return (
        <div className='background'>
            <Container className='px-4 py-5'>
                <h1 className='m-4 p-4 heading'>Contact Us</h1>

                <Form className='formFormat'>
                    <Form.Group className="mb-3 mx-5 inputBox" controlId="formBasicName">
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group className="mb-3 mx-5 inputBox" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3 mx-5 inputBox" controlId="formBasicMessage">
                        <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                    </Form.Group>

                    <Button variant="outline-light" type="submit" size="lg" className="px-4 my-3 mx-5" style={{color: "#FF6AC3", borderColor: "#FF6AC3"}}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Contact;