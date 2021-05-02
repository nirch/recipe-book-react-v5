import React from 'react';
import { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import './SignupPage.css';
import Parse from 'parse';
import UserModel from '../../model/UserModel';
import { Redirect } from 'react-router';

function SignupPage({activeUser, onLogin}) {
    const [showSignupError, setShowSignupError] = useState(false);
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");

    if (activeUser) {
        return <Redirect to="/recipes"/>
    }

    function signup(e) {
        e.preventDefault();

        // validation code is missing here...

        const user = new Parse.User()
        user.set('username', email);
        user.set('email', email);
        user.set('fname', fname);
        user.set('lname', lname);
        user.set('password', pwd);

        user.signUp().then(parseUser => {
            const activeUser = new UserModel(parseUser);
            onLogin(activeUser);
        }).catch(error => {
            setShowSignupError(true);
            console.error('Error while signing up user', error);
        });
    }

    return (
        <div className="p-signup">
            <h1>Welcome to Recipe Book</h1>
            <p>Please fill the follwoing detais</p>
            {showSignupError ? <Alert variant="danger">Error in Sign Up!</Alert> : null}
            <Form onSubmit={signup}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" 
                        value={email} onChange={e => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                        value={pwd} onChange={e => setPwd(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicFname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" 
                        value={fname} onChange={e => setFname(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicLname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" 
                        value={lname} onChange={e => setLname(e.target.value)} />
                </Form.Group>

                <Button variant="success" type="submit" block>
                    Signup
                </Button>
            </Form>
        </div>
    );
}

export default SignupPage;