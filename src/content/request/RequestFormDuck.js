
const FIND_CHORD_SUCCESS_TYPE = 'chord/responseFound';
const FIND_CHORD_FAILURE_TYPE = 'chord/responseError';

const initialState = {
    response: {}
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FIND_CHORD_SUCCESS_TYPE: {
            return {
                ...state,
                response: {
                    success: true,
                    data: action.payload
                }
            }
        }
        case FIND_CHORD_FAILURE_TYPE: {
            return {
                ...state,
                response: {
                    success: false,
                    data: undefined
                }
            }
        }
        default:
            return state;
    }
};

export const findChordSuccess = (data) => ({ type: FIND_CHORD_SUCCESS_TYPE, payload: data });


export const findChordFailure = () => ({ type: FIND_CHORD_FAILURE_TYPE });