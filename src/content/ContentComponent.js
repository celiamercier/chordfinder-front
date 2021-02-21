import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import JsonviewComponent from "./jsonview/JsonviewComponent";

import './ContentComponent.css';

class ContentComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            request: []
        };

        this.noteSelector = React.createRef();

        this.handleAddNote = this.handleAddNote.bind(this);
        this.handleClearRequest = this.handleClearRequest.bind(this);
        this.handleFindChord = this.handleFindChord.bind(this);
    }

    handleAddNote(e) {
        this.setState((state) => {
            const note = this.noteSelector.current.value;
            if (state.request.indexOf(note) < 0) {
                return ({
                    request:  state.request.concat([note])
                });
            }
            return state;
        });
        e.preventDefault();
    }

    handleClearRequest(e) {
        this.setState({
            request: []
        });
        e.preventDefault();
    }

    handleFindChord() {
        console.log('find chord...')
    }

    render() {
        return (
            <Container fluid>
                <Row className="main-block">
                    <Col xs={3}>
                        <h3 className="block-title">Pick notes</h3>
                        <Form>
                            {this.state.request.length > 0 &&
                                <div className="request-description">{this.state.request.map((note) =>
                                    <span key={note} className="request-note">{note}</span>)}
                                 </div>
                            }
                            <Form.Row>
                                <Col>
                                    <Form.Control as="select" className="mr-sm-3" ref={this.noteSelector}>
                                        <option>C</option>
                                        <option>C#</option>
                                        <option>D</option>
                                        <option>D#</option>
                                        <option>E</option>
                                        <option>F</option>
                                        <option>F#</option>
                                        <option>G</option>
                                        <option>G#</option>
                                        <option>A</option>
                                        <option>A#</option>
                                        <option>B</option>
                                    </Form.Control>
                                </Col>
                                <Col>
                                    <Button onClick={this.handleAddNote} variant="secondary" className="add-button">Add</Button>
                                    <Button onClick={this.handleClearRequest} variant="danger">Clear</Button>
                                </Col>
                            </Form.Row>
                            <Button className="find-button" onClick={this.handleFindChord} variant="success" size="lg" block>Find</Button>
                        </Form>
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