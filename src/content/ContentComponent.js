import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import RequestFormComponent from "./request/RequestFormComponent";
import ResponseComponent from "./response/ResponseComponent";

import './ContentComponent.css';

class ContentComponent extends React.Component {

    render() {
        return (
            <Container fluid>
                <Row className="main-block">
                    <Col xs={4}>
                        <h3 className="block-title">Pick notes</h3>
                        <RequestFormComponent/>
                    </Col>
                </Row>
                <Row className="main-block result-row">
                    <Col>
                        <ResponseComponent/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ContentComponent;