import React from 'react';
import { Grid, Title, MovieWrapper } from './styles';
import PropTypes from "prop-types";

const MovieGrid = ({ children }) => {
    return (
        <MovieWrapper>
            <Title>Todas las publicaciones</Title>
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