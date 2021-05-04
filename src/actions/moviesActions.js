import { SEARCH, SET_MOVIES } from '@types/moviesTypes';

export const searchMovie = movie => {
    return {
        type: SEARCH,
        payload: movie
    };
};

export const setMovies = movies => {
    return {
        type: SET_MOVIES,
        payload: movies
    };
};