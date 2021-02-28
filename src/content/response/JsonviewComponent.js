import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

import './JsonviewComponent.css';

class JsonviewComponent extends React.Component {

    render() {
        return (
            <div className="jsonview-panel">
                {
                    this.props.value !== undefined &&
                    <ReactJson theme="monokai"
                               src={this.props.value}
                               collapsed={2}
                               displayObjectSize={false}
                               displayDataTypes={false}
                               enableClipboard={false}
                    />
                }
            </div>
        );
    }
}

JsonviewComponent.propTypes = {
    value: PropTypes.object,
};


export default JsonviewComponent;