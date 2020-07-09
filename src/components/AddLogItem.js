import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const AddLogItem = ({ addItem }) => {
    const [text, setText] = useState('');
    const [user, setUser] = useState('');
    const [priority, setPriority] = useState('');

    const onSubmit = e => {
        e.preventDefault();

        addItem({ text, user, priority });

        // Clear inputs
        setText('');
        setUser('');
        setPriority('');
    };

    return (
        <Card className="mt-5 mb-3">
            <Card.Body>
                <Form onSubmit={onSubmit}>
                    <Row className="my-3">
                        <Col>
                            <Form.Control
                                onChange={e => setText(e.target.value)}
                                placeholder="Log"
                                value={text}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control
                                onChange={e => setUser(e.target.value)}
                                placeholder="User"
                                value={user}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                as="select"
                                value={priority}
                                onChange={e => setPriority(e.target.value)}
                            >
                                <option value="0">Select Priority</option>
                                <option value="low">Low</option>
                                <option value="moderate">Moderate</option>
                                <option value="high">High</option>
                            </Form.Control>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col>
                            <Button
                                type="submit"
                                variant="dark"
                                block
                            >
                                <i className="fas fa-plus" />{' '}
                                Add Log
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default AddLogItem;