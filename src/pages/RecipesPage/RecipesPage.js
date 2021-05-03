import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Redirect } from 'react-router';
import NewRecipeModal from '../../components/NewRecipeModal/NewRecipeModal';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import './RecipesPage.css'

function RecipesPage({activeUser}) {
    const [showNewRecipeModal, setShowNewRecipeModal] = useState(false);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const recipes = await activeUser.getMyRecipe();
            setRecipes(recipes);
        }
        
        if (activeUser) {
            fetchData();
        }
    }, [activeUser])


    if (!activeUser) {
        return <Redirect to="/"/>
    }

    async function handleNewRecipe(name, desc, imgFile) {
        const newRecipe = await activeUser.createRecipe(name, desc, imgFile);
        setRecipes(recipes.concat(newRecipe));
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
            <NewRecipeModal show={showNewRecipeModal} onClose={() => setShowNewRecipeModal(false)} onCreate={handleNewRecipe}/>
        </Container>
    );
}

export default RecipesPage;