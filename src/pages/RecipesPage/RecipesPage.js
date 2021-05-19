import React, { useContext, useMemo, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Redirect } from 'react-router';
import NewRecipeModal from '../../components/NewRecipeModal/NewRecipeModal';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import ActiveUserContext from '../../shared/ActiveUserContext';
import './RecipesPage.css'
import { Pie } from 'react-chartjs-2';

function RecipesPage({recipes, onNewRecipe}) {
    const [showNewRecipeModal, setShowNewRecipeModal] = useState(false);
    const activeUser = useContext(ActiveUserContext);

    const difficultyData = useMemo(() => {
        console.log("calculating difficultyData");
        let easyRecipes = 0;
        let hardRecipes = 0;
        for (const recipe of recipes) {
            if (recipe.difficulty === 1) {
                ++easyRecipes;
            } else {
                ++hardRecipes;
            }
        }
        return {
            labels: ['Easy', 'Hard'],
            datasets: [
                {
                label: '# of Recipes',
                data: [easyRecipes, hardRecipes],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
                },
            ],
        };
    }, [recipes]);

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
                {recipes.map((recipe, index) => 
                    <Col key={recipe.id} md={3} sm={6}>
                        <RecipeCard recipe={recipe} index={index}/>
                    </Col>
                )}
            </Row>
            <Pie data={difficultyData}/>
            <NewRecipeModal show={showNewRecipeModal} onClose={() => setShowNewRecipeModal(false)} onCreate={onNewRecipe}/>
        </Container>
    );
}

export default RecipesPage;