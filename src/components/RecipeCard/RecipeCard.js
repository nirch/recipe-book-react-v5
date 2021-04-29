import React from 'react';
import { Card } from 'react-bootstrap';

function RecipeCard({recipe}) {
    return (
        <Card className="c-recipe">
            <Card.Img variant="top" src={recipe.img} />
            <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
                <Card.Text>{recipe.desc}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default RecipeCard;