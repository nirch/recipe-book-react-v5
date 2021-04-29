import React from 'react';
import { Container } from 'react-bootstrap';
import { Redirect } from 'react-router';

function RecipesPage({activeUser, recipes}) {

    if (!activeUser) {
        return <Redirect to="/"/>
    }

    return (
        <Container>
            <h1>{activeUser.fname}'s Recipes</h1>
            {recipes.map(recipe => <p key={recipe.id}>{recipe.name}</p>)}
        </Container>
    );
}

export default RecipesPage;