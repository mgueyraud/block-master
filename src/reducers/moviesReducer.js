import { SEARCH, SET_MOVIES } from '@types/moviesTypes';

const initialState = {
    search: "",
    movies: []
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH:
            return { ...state, search: action.payload }
        case SET_MOVIES:
            return { ...state, movies: [...action.payload] }
        default: return state;
    }
}

export default moviesReducer;