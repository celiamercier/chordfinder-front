
const initialState = {
    chord: {
        response: {}
    }
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'chord/responseFound': {
            return {
                ...state,
                chord: {
                    response: action.payload
                }
            }
        }
        default:
            return state;
    }
}