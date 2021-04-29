import React from 'react';
import { Container } from 'react-bootstrap';

function HomePage(props) {
    return (
        <Container className="p-home">
            <h1 className="display-1">Recipe Book</h1>
            <p>Master your recipes</p>
        </Container>
    );
}

export default HomePage;