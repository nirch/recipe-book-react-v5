import React, { useState } from 'react';
import { Button, Modal, Form, Col, Row, Image } from 'react-bootstrap';
import './NewRecipeModal.css'

function NewRecipeModal({ show, onClose, onCreate }) {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState(null);


    function clearForm() {
        setName("");
        setDesc("");
        setImg(null);
    }

    function createRecipe() {
        onCreate(name, desc, img ? URL.createObjectURL(img) : "");
        clearForm();
        onClose();
    }

    function handleFileChange(e) {
        if (e.target.files.length === 1) {
            setImg(e.target.files[0]);
        } else {
            setImg(null);
        }
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
                            Recipe Image
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="file" accept="image/*" onChange={handleFileChange}/>
                        </Col>
                    </Form.Group>
                    <Image src={img ? URL.createObjectURL(img) : ""}/>
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