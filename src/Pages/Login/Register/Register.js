import React, {useRef} from 'react';
import {Button, Form} from "react-bootstrap";
import {Link} from "react-router-dom";

const Register = () => {
    const handleLogin = e => {
        e.preventDefault()
        const name=e.target.formBasicName.value
        const password=e.target.formBasicPassword.value
        const email=e.target.formBasicEmail.value
    };
    return (
        <div className={'w-50 mx-auto'}>
            <h1 className={'text-primary text-center mt-2'}>Please Login</h1>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name={'name'} placeholder="Name" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p className={'mt-3'}>Already registered? <Link to={'/login'} className={'text-danger pe-auto text-decoration-none'}> Login instead!</Link></p>
        </div>
    );
};

export default Register;