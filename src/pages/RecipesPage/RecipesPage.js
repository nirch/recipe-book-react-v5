import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Redirect } from 'react-router';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import './RecipesPage.css'

function RecipesPage({activeUser, recipes}) {

    if (!activeUser) {
        return <Redirect to="/"/>
    }

    return (
        <Container className="p-recipes">
            <div className="heading">
                <h1>{activeUser.fname}'s Recipes</h1>
                <Button variant="link">New Recipe</Button>

            </div>
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