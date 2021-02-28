import React from 'react';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import JsonviewComponent from "./JsonviewComponent";

class ResponseComponent extends React.Component {

    render() {
        return (
            <Row>
                <Col>
                    {
                        this.props.response.success === true &&
                        this.props.response.data.bestChords.map(chord =>
                            <h1 key={chord}>{chord}</h1>)
                    }
                    {
                        this.props.response.success === false &&
                        <Alert variant="danger" className="error-message">An unexpected error occured</Alert>
                    }
                </Col>
                <Col xs={4}>
                    {
                        this.props.response.success !== false &&
                        <JsonviewComponent value={this.props.response.success === true ? this.props.response.data : undefined} />
                    }
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        response: state.chordRequest.response
    }
};

export default connect(mapStateToProps)(ResponseComponent);