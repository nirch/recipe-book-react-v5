import React, { useState } from 'react';
import { Button, Modal, Form, Col, Row, Image } from 'react-bootstrap';
import './NewRecipeModal.css'

function NewRecipeModal({ show, onClose }) {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [imgURL, setImgURL] = useState("");


    function clearForm() {
        setName("");
        setDesc("");
        setImgURL("");
    }

    function createRecipe() {
        console.log(name, desc, imgURL); 
        clearForm();
        onClose();
    }

    return (
        <Modal show={show} onHide={onClose} size="lg" className="c-new-recipe">
            <Modal.Header closeButton>
                <Modal.Title>New Recipe</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={3}>
                            Recipe Name
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Recipe Name" 
                                value={name} onChange={e => setName(e.target.value)}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalDesc">
                        <Form.Label column sm={3}>
                            Recipe Description
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Recipe Description" 
                                value={desc} onChange={e => setDesc(e.target.value)}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalImg">
                        <Form.Label column sm={3}>
                            Recipe Image URL
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Recipe Image URL" 
                                value={imgURL} onChange={e => setImgURL(e.target.value)}/>
                        </Col>
                    </Form.Group>
                    <Image src={imgURL}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={createRecipe}>
                    Create Recipe
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default NewRecipeModal;