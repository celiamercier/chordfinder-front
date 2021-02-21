import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import JsonviewComponent from "./jsonview/JsonviewComponent";

import './ContentComponent.css';

import RequestFormComponent from "./request/RequestFormComponent";

class ContentComponent extends React.Component {

    render() {
        return (
            <Container fluid>
                <Row className="main-block">
                    <Col xs={3}>
                        <h3 className="block-title">Pick notes</h3>
                        <RequestFormComponent/>
                    </Col>
                </Row>
                <Row className="main-block result-row">
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