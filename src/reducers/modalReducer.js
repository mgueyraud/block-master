import { SET_MODAL, CLOSE_MODAL } from '@types/modalTypes';

const initialState = {
    isOpen: false,
    movieId: ""
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MODAL:
            return { ...state, isOpen: true, movieId: action.payload }
        case CLOSE_MODAL:
            return { ...state, isOpen: false, movieId: "" }
        default: return state;
    }
}

export default modalReducer;