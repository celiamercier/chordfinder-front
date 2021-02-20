import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import JsonviewComponent from "./jsonview/JsonviewComponent";

import './ContentComponent.css';

class ContentComponent extends React.Component {

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col xs={3}>
                        <h3>Pick notes</h3>
                        <Form inline>
                            <Form.Control as="select" className="mr-sm-3">
                                <option>C</option>
                                <option>D</option>
                                <option>E</option>
                            </Form.Control>
                            <Button variant="secondary">Add</Button>
                        </Form>
                        <div className="request-panel"></div>
                        <Button variant="success" size="lg" block>Find</Button>
                    </Col>
                </Row>
                <Row className="result-row">
                    <Col>
                        <h1>Gmaj7</h1>
                    </Col>
                    <Col xs={4}>
                        <JsonviewComponent/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ContentComponent;