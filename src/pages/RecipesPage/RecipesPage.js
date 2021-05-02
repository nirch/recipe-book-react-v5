import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Redirect } from 'react-router';
import NewRecipeModal from '../../components/NewRecipeModal/NewRecipeModal';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import './RecipesPage.css'
import Parse from 'parse';
import RecipeModel from '../../model/RecipeModel';

function RecipesPage({activeUser, onNewRecipe}) {
    const [showNewRecipeModal, setShowNewRecipeModal] = useState(false);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const RecipeTable = Parse.Object.extend('Recipe');
        const query = new Parse.Query(RecipeTable);
        query.equalTo("userId", Parse.User.current());
        query.find().then(parseRecipes => {
            setRecipes(parseRecipes.map(parseRecipe => new RecipeModel(parseRecipe)));
        }, (error) => {
            console.error('Error while fetching Recipe', error);
        });
    }, [activeUser])


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