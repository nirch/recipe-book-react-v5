import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function RecipeNavbar({activeUser}) {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#/">Recipe Book</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                {activeUser ? <Nav.Link href="#/recipes">Recipes</Nav.Link> : null}
            </Nav>
            <Nav className="ml-auto">
                {!activeUser ? <Nav.Link href="#/login">Login</Nav.Link> : null}
                {!activeUser ? <Nav.Link href="#/signup">Signup</Nav.Link> : null}
                {activeUser ? <Nav.Link href="#">Logout</Nav.Link> : null}
            </Nav>
        </Navbar.Collapse>
        </Navbar>    
    );
}

export default RecipeNavbar;