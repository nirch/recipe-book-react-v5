import React from 'react';
import { Container } from 'react-bootstrap';
import { Redirect } from 'react-router';

function RecipesPage({activeUser}) {

    if (!activeUser) {
        return <Redirect to="/"/>
    }

    return (
        <Container>
            <h1>{activeUser.fname}'s Recipes</h1>
        </Container>
    );
}

export default RecipesPage;