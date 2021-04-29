import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LoginPage.css'

function LoginPage(props) {
    return (
        <div className="p-login">
            <h1>Login to Recipe Book</h1>
            <p>or <Link to="/signup">create an account</Link></p>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="success" type="submit" block>
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default LoginPage;