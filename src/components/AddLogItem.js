import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const AddLogItem = () => {
    const [text, setText] = useState('');
    const [user, setUser] = useState('');
    const [priority, setPriority] = useState('');

    return (
        <Card className="mt-5 mb-3">
            <Card.Body>
                <Form>
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
                                <option value="1">Low</option>
                                <option value="2">Moderate</option>
                                <option value="3">High</option>
                            </Form.Control>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col>
                            <Button
                                type="submit"
                                variant="secondary"
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