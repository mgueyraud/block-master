import React from 'react';
import PropTypes from "prop-types";
import { Button } from "@components";
import { Banner, Buttons } from './styles';

const BannerComponent = ({ imgUrl, alt, className }) => {
    return (
        <Banner className={className}>
            <img src={imgUrl} alt={alt} />
            <Buttons>
                <Button text="Ver Ahora" icon="./assets/img/icons/play-icon.svg" />
                <Button text="Ver Despues" icon="./assets/img/icons/plus-icon.svg" secondary />
            </Buttons>
        </Banner>
    );
}

BannerComponent.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};

export default BannerComponent;