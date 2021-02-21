
export const FIND_CHORD_SUCCESS_TYPE = 'chord/responseFound';
export const findChordSuccess = (data) => ({ type: FIND_CHORD_SUCCESS_TYPE, payload: data });

export const FIND_CHORD_FAILURE_TYPE = 'chord/responseError';
export const findChordFailure = () => ({ type: FIND_CHORD_FAILURE_TYPE });