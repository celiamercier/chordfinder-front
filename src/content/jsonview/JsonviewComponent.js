import React from 'react';
import ReactJson from 'react-json-view';

import './JsonviewComponent.css';

class JsonviewComponent extends React.Component {

    render() {
        const result = {
            "bestChords": [
                "Gmaj7"
            ],
            "details": [
                {
                    "permutation": {
                        "intervals": [
                            "M3",
                            "P5",
                            "M7"
                        ],
                        "root": "G"
                    },
                    "possibleChords": [
                        {
                            "definition": "MAJOR_SEVENTH",
                            "score": 100
                        },
                        {
                            "definition": "MAJOR",
                            "score": 50
                        },
                        {
                            "definition": "MINOR",
                            "score": 0
                        },
                        {
                            "definition": "MAJOR_DIMINISHED_FIFTH",
                            "score": 0
                        },
                        {
                            "definition": "AUGMENTED",
                            "score": 0
                        },
                        {
                            "definition": "SUSPENDED_2",
                            "score": 0
                        },
                        {
                            "definition": "SUSPENDED_4",
                            "score": 0
                        },
                        {
                            "definition": "SEVENTH",
                            "score": 0
                        },
                        {
                            "definition": "MINOR_SEVENTH",
                            "score": 0
                        },
                        {
                            "definition": "MINOR_MAJOR_SEVENTH",
                            "score": 0
                        },
                        {
                            "definition": "SEVENTH_DIMINISHED_FIFTH",
                            "score": 0
                        },
                        {
                            "definition": "SEVENTH_AUGMENTED",
                            "score": 0
                        },
                        {
                            "definition": "MAJOR_SEVENTH_AUGMENTED",
                            "score": 0
                        },
                        {
                            "definition": "MAJOR_SIXTH",
                            "score": 0
                        },
                        {
                            "definition": "MINOR_SIXTH",
                            "score": 0
                        },
                        {
                            "definition": "NINTH",
                            "score": 0
                        },
                        {
                            "definition": "MINOR_NINTH",
                            "score": 0
                        },
                        {
                            "definition": "MAJOR_SEVENTH_NINTH",
                            "score": 0
                        },
                        {
                            "definition": "MINOR_NINTH_OF_DOMINATE",
                            "score": 0
                        },
                        {
                            "definition": "MINOR_MINOR_NINTH",
                            "score": 0
                        }
                    ],
                    "score": 100
                },
                {
                    "permutation": {
                        "intervals": [
                            "P5",
                            "m6",
                            "m3"
                        ],
                        "root": "B"
                    },
                    "possibleChords": [
                        {
                            "definition": "MINOR",
                            "score": 50
                        },
                        {
                            "definition": "MAJOR",
                            "score": 0
                        },
                        {
                            "definition": "DIMINISHED",
                            "score": 0
                        },
                        {
                            "definition": "SUSPENDED_2",
                            "score": 0
                        },
                        {
                            "definition": "SUSPENDED_4",
                            "score": 0
                        },
                        {
                            "definition": "SEVENTH",
                            "score": 0
                        },
                        {
                            "definition": "MAJOR_SEVENTH",
                            "score": 0
                        },
                        {
                            "definition": "MINOR_SEVENTH",
                            "score": 0
                        },
                        {
                            "definition": "MINOR_MAJOR_SEVENTH",
                            "score": 0
                        },
                        {
                            "definition": "MINOR_SEVENTH_DIMINISHED_FIFTH",
                            "score": 0
                        },
                        {
                            "definition": "SEVENTH_DIMINISHED",
                            "score": 0
                        },
                        {
                            "definition": "MAJOR_SIXTH",
                            "score": 0
                        },
                        {
                            "definition": "MINOR_SIXTH",
                            "score": 0
                        },
                        {
                            "definition": "NINTH",
                            "score": 0
                        },
                        {
                            "definition": "MINOR_NINTH",
                            "score": 0
                        },
                        {
                            "definition": "MAJOR_SEVENTH_NINTH",
                            "score": 0
                        },
                        {
                            "definition": "MINOR_NINTH_OF_DOMINATE",
                            "score": 0
                        },
                        {
                            "definition": "MINOR_MINOR_NINTH",
                            "score": 0
                        },
                        {
                            "definition": "MINOR_NINTH_DIMINISHED_FIFTH",
                            "score": 0
                        }
                    ],
                    "score": 50
                },
                {
                    "permutation": {
                        "intervals": [
                            "M3",
                            "P4",
                            "M6"
                        ],
                        "root": "D"
                    },
                    "possibleChords": [
                        {
                            "definition": "MAJOR",
                            "score": 0
                        },
                        {
                            "definition": "MAJOR_DIMINISHED_FIFTH",
                            "score": 0
                        },
                        {
                            "definition": "AUGMENTED",
                            "score": 0
                        },
                        {
                            "definition": "SUSPENDED_4",
                            "score": 0
                        },
                        {
                            "definition": "SEVENTH",
                            "score": 0
                        },
                        {
                            "definition": "MAJOR_SEVENTH",
                            "score": 0
                        },
                        {
                            "definition": "SEVENTH_DIMINISHED_FIFTH",
                            "score": 0
                        },
                        {
                            "definition": "SEVENTH_AUGMENTED",
                            "score": 0
                        },
                        {
                            "definition": "MAJOR_SEVENTH_AUGMENTED",
                            "score": 0
                        },
                        {
                            "definition": "MAJOR_SIXTH",
                            "score": 0
                        },
                        {
                            "definition": "MINOR_SIXTH",
                            "score": 0
                        },
                        {
                            "definition": "NINTH",
                            "score": 0
                        },
                        {
                            "definition": "MAJOR_SEVENTH_NINTH",
                            "score": 0
                        },
                        {
                            "definition": "MINOR_NINTH_OF_DOMINATE",
                            "score": 0
                        }
                    ],
                    "score": 0
                },
                {
                    "permutation": {
                        "intervals": [
                            "m2",
                            "m6",
                            "P4"
                        ],
                        "root": "F_SHARP"
                    },
                    "possibleChords": [
                        {
                            "definition": "SUSPENDED_4",
                            "score": 0
                        }
                    ],
                    "score": 0
                }
            ]
        };

        return (
            <div className="jsonview-panel">
                <ReactJson theme="monokai"
                           src={result}
                           collapsed={2}
                           displayObjectSize={false}
                           displayDataTypes={false}
                           enableClipboard={false}
                />
            </div>
        );
    }
}

export default JsonviewComponent;