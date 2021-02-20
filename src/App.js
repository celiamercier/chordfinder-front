import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';
import ContentComponent from "./content/ContentComponent";

class App extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <div className="header">Chordfinder</div>
                    </Col>
                </Row>
                <Row className="main-row" noGutters>
                    <Col>
                        <ContentComponent/>
                    </Col>
                </Row>
            </Container>);
    }
}

export default App;
