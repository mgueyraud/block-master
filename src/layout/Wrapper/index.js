import React from 'react';
import { MaxWrapper } from './styles';
import PropTypes from "prop-types";

const Wrapper = ({ children }) => {
    return (
        <MaxWrapper>
            {children}
        </MaxWrapper>
    );
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired
};

export default Wrapper;