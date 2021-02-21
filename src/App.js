import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';
import ContentComponent from "./content/ContentComponent";

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="header">Chordfinder</div>
                <Container fluid>
                    <Row className="main-row" noGutters>
                        <Col>
                            <ContentComponent/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
