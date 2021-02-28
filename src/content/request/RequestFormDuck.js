import axios from 'axios';
import config from '../../config/config';
const FIND_CHORD_LOADING_TYPE = 'chord/loading';
const FIND_CHORD_SUCCESS_TYPE = 'chord/responseFound';
const FIND_CHORD_FAILURE_TYPE = 'chord/responseError';

const initialState = {
    response: {
        loading: false
    }
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FIND_CHORD_LOADING_TYPE: {
            return {
                ...state,
                response: {
                    ...state.response,
                    loading: true,
                }
            }
        }
        case FIND_CHORD_SUCCESS_TYPE: {
            return {
                ...state,
                response: {
                    loading: false,
                    success: true,
                    data: action.payload
                }
            }
        }
        case FIND_CHORD_FAILURE_TYPE: {
            return {
                ...state,
                response: {
                    loading: false,
                    success: false,
                    data: undefined
                }
            }
        }
        default:
            return state;
    }
};

export function findChord(request) {
    return (dispatch) => {
        dispatch({ type: FIND_CHORD_LOADING_TYPE });
        axios.post(`${config.SERVER_URL}/chords`, request)
            .then(res => {
                dispatch({ type: FIND_CHORD_SUCCESS_TYPE, payload: res.data })
            })
            .catch(error => {
                console.error(JSON.stringify(error));
                dispatch({ type: FIND_CHORD_FAILURE_TYPE })
            })
    };
}