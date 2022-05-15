import React, {useRef} from 'react';
import {Button, Form} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const handleLogin = e => {
        e.preventDefault()
    };
    return (
        <div className={'w-50 mx-auto'}>
            <h1 className={'text-primary text-center mt-2'}>Please Login</h1>
        <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                <Form.Text className="text-muted">
                    Enter your registered email
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
            <p>New to Genius car? <Link to={'/register'} className={'text-danger pe-auto text-decoration-none'}> Register now!</Link></p>
        </div>
    );
};

export default Login;