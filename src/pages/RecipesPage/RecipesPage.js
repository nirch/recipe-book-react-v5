import React, { useContext, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Redirect } from 'react-router';
import NewRecipeModal from '../../components/NewRecipeModal/NewRecipeModal';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import ActiveUserContext from '../../shared/ActiveUserContext';
import './RecipesPage.css'

function RecipesPage({recipes, onNewRecipe}) {
    const [showNewRecipeModal, setShowNewRecipeModal] = useState(false);
    const activeUser = useContext(ActiveUserContext);

    if (!activeUser) {
        return <Redirect to="/"/>
    }

    return (
        <Container className="p-recipes">
            <div className="heading">
                <h1>{activeUser.fname}'s Recipes</h1>
                <Button variant="link" onClick={() => setShowNewRecipeModal(true)}>New Recipe</Button>
            </div>
            <Row>
                {recipes.map(recipe => 
                    <Col key={recipe.id} md={3} sm={6}>
                        <RecipeCard recipe={recipe}/>
                    </Col>
                )}
            </Row>
            <NewRecipeModal show={showNewRecipeModal} onClose={() => setShowNewRecipeModal(false)} onCreate={onNewRecipe}/>
        </Container>
    );
}

export default RecipesPage;