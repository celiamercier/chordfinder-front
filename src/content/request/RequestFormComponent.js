import React from 'react';
import { connect } from 'react-redux';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

import { findChordFailure, findChordSuccess } from "../../store/actions";

import './RequestFormComponent.css';

class RequestFormComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            request: ['D', 'F#', 'G', 'B']
        };

        this.noteSelector = React.createRef();

        this.handleAddNote = this.handleAddNote.bind(this);
        this.handleRemoveNote = this.handleRemoveNote.bind(this);
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

    handleRemoveNote(e) {
        this.setState((state) => {
            if (state.request.length > 1) {
                return ({
                    request:  state.request.slice(0, state.request.length - 1)
                });
            }
            return ({
                request: []
            });
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

        axios.post('https://nameless-temple-87656.herokuapp.com/chords', requestBody)
            .then(res => {
                this.props.findChordSuccess(res.data);
            })
            .catch(error => {
                console.error(JSON.stringify(error));
                this.props.findChordFailure();
            })
    }

    render() {
        return (
            <Form>
                {
                    this.state.request.length > 0 &&
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
                        <Button onClick={this.handleAddNote} variant="info" className="button-mr">Add</Button>
                        <Button onClick={this.handleRemoveNote} variant="secondary" className="button-mr">Remove</Button>
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
            </Form>
        );
    }
}

const mapDispatchToProps = {
    findChordSuccess,
    findChordFailure
};

export default connect(null, mapDispatchToProps)(RequestFormComponent);