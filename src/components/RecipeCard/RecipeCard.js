import React from 'react';
import { Card } from 'react-bootstrap';
import './RecipeCard.css'

function RecipeCard({recipe, index}) {

    const animationDelayStyle = {
        animationDelay: index * 2 + "s"
    }

    return (
        <Card className="c-recipe" style={animationDelayStyle}>
            <Card.Img variant="top" src={recipe.img} />
            <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
                <Card.Text>{recipe.desc}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default RecipeCard;