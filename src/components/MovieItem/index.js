import React from 'react';
import { MovieArticle } from './styles';
import { Stars } from '@components';
import PropTypes from "prop-types";

const MovieItem = ({ imgUrl, points }) => {
    return (
        <MovieArticle>
            <Stars points={points} />
            <img src={imgUrl} />
        </MovieArticle>
    );
}

MovieItem.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    points: PropTypes.string.isRequired
};

export default MovieItem;