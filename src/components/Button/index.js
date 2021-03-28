import React from 'react';
import { Button } from './styles';
import PropTypes from "prop-types";

const ButtonComponent = ({ text, icon, onClick, secondary, borderlessLeft }) => (
    <Button onClick={onClick} secondary={secondary} borderlessLeft={borderlessLeft}>
        <img src={`${icon}`} />
        {text && <span>{text}</span>}
    </Button>
);

ButtonComponent.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    secondary: PropTypes.bool,
    borderlessLeft: PropTypes.bool
}

export default ButtonComponent;