import { FIND_CHORD_FAILURE_TYPE, FIND_CHORD_SUCCESS_TYPE } from "./actions";

const initialState = {
    chord: {
        response: {}
    }
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case FIND_CHORD_SUCCESS_TYPE: {
            return {
                ...state,
                chord: {
                    response: {
                        success: true,
                        data: action.payload
                    }
                }
            }
        }
        case FIND_CHORD_FAILURE_TYPE: {
            return {
                ...state,
                chord: {
                    response: {
                        success: false,
                        data: undefined
                    }
                }
            }
        }
        default:
            return state;
    }
}