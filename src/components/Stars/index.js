import React from 'react';
import PropTypes from "prop-types";
import { Pill } from './styles';

const Stars = ({ points }) => (
    <Pill>
        <img src="./assets/img/icons/star-icon.svg" />
        <span>{points}</span>
    </Pill>
);

Stars.propTypes = {
    points: PropTypes.string.isRequired
};

export default Stars;