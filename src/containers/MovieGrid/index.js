import React from 'react';
import { Grid, Title, MovieWrapper } from './styles';
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';

const MovieGrid = ({ children }) => {

    const moviesReducers = useSelector(state => state.moviesReducer);

    return (
        <MovieWrapper>
            <Title>{moviesReducers.search ? `Resultados para: "${moviesReducers.search}"` : "Todas las publicaciones"}</Title>
            <Grid>
                {children}
            </Grid>
        </MovieWrapper>
    );
}

MovieGrid.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default MovieGrid;