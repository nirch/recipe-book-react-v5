import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Redirect } from 'react-router';
import NewRecipeModal from '../../components/NewRecipeModal/NewRecipeModal';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import './RecipesPage.css'
import Parse from 'parse';
import RecipeModel from '../../model/RecipeModel';

function RecipesPage({activeUser}) {
    const [showNewRecipeModal, setShowNewRecipeModal] = useState(false);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        if (activeUser) {
            const RecipeTable = Parse.Object.extend('Recipe');
            const query = new Parse.Query(RecipeTable);
            query.equalTo("userId", Parse.User.current());
            query.find().then(parseRecipes => {
                setRecipes(parseRecipes.map(parseRecipe => new RecipeModel(parseRecipe)));
            }, (error) => {
                console.error('Error while fetching Recipe', error);
            });
        }
    }, [activeUser])


    if (!activeUser) {
        return <Redirect to="/"/>
    }

    function handleNewRecipe(name, desc, imgFile) {
        const RecipeTable = Parse.Object.extend('Recipe');
        const newRecipe = new RecipeTable();

        newRecipe.set('name', name);
        newRecipe.set('desc', desc);
        if (imgFile) {
            newRecipe.set('img', new Parse.File(imgFile.name, imgFile));
        }
        newRecipe.set('userId', Parse.User.current());

        newRecipe.save().then(parseRecipe => {
            setRecipes(recipes.concat(new RecipeModel(parseRecipe)));
            // setOnProgress(false);
        }, error => {
            console.error('Error while creating Recipe: ', error);
             // setOnProgress(false);
        });

        // setOnProgress(true);
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