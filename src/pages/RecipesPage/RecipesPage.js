import React, { useContext, useState } from 'react';
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

    if (!activeUser) {
        return <Redirect to="/"/>
    }
    
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
            },
        ],
    };
      



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
            <Pie data={data}/>
            <NewRecipeModal show={showNewRecipeModal} onClose={() => setShowNewRecipeModal(false)} onCreate={onNewRecipe}/>
        </Container>
    );
}

export default RecipesPage;