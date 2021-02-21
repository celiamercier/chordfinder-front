import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

import './RequestFormComponent.css';

class RequestFormComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showError: false,
            request: ['D', 'F#', 'G', 'E']
        };

        this.noteSelector = React.createRef();

        this.handleAddNote = this.handleAddNote.bind(this);
        this.handleClearRequest = this.handleClearRequest.bind(this);
        this.handleFindChord = this.handleFindChord.bind(this);

        this.showErrorMessage = this.showErrorMessage.bind(this);
        this.hideErrorMessage = this.hideErrorMessage.bind(this);
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
        const requestBody = {
            notes: this.state.request
        };

        axios.post('http://localhost:8080/chords', requestBody)
            .then(res => {
                console.log(JSON.stringify(res));
                this.hideErrorMessage();
            })
            .catch(error => {
                console.error(JSON.stringify(error));
                this.showErrorMessage();
            })
    }

    showErrorMessage() {
        this.setState({
            showError: true
        });
    }

    hideErrorMessage() {
        this.setState({
            showError: false
        });
    }

    render() {
        return (
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
                <Button className="find-button"
                        onClick={this.handleFindChord}
                        disabled={this.state.request.length < 2}
                        variant="success"
                        size="lg"
                        block>
                    Find
                </Button>

                {this.state.showError &&
                    <Alert variant="danger" onClose={this.hideErrorMessage} className="error-message" dismissible>
                        An unexpected error occured
                    </Alert>
                }
            </Form>
        );
    }
}

export default RequestFormComponent;