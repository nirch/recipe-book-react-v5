import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Redirect } from 'react-router';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import './RecipesPage.css'

function RecipesPage({activeUser, recipes}) {

    if (!activeUser) {
        return <Redirect to="/"/>
    }

    return (
        <Container className="p-recipes">
            <h1>{activeUser.fname}'s Recipes</h1>
            <Row>
                {recipes.map(recipe => 
                    <Col key={recipe.id} md={3} sm={6}>
                        <RecipeCard recipe={recipe}/>
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default RecipesPage;