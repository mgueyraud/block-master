import { SET_MODAL, CLOSE_MODAL } from '@types/modalTypes';

export const openModal = movieId => {
    return {
        type: SET_MODAL,
        payload: movieId
    };
};

export const closeModal = _ => {
    return {
        type: CLOSE_MODAL
    };
};