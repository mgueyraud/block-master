import React, { useEffect, useRef } from 'react';
import { MovieArticle } from './styles';
import { Stars } from '@components';
import PropTypes from "prop-types";

const MovieItem = ({ imgUrl, points }) => {

    const movieRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            const element = entries[0];
            if (element.isIntersecting) {
                const $image = movieRef.current.querySelector(".lazy");
                const srcImage = $image.dataset.src;
                $image.src = srcImage;
                observer.unobserve(movieRef.current);
            }
        }, {});

        observer.observe(movieRef.current);
    }, [])

    const handleClick = () => {
        console.log("Hola");
    };

    return (
        <MovieArticle ref={movieRef} onClick={handleClick}>
            <Stars points={points} />
            <img className="lazy" data-src={imgUrl} />
        </MovieArticle>
    );
}

MovieItem.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    points: PropTypes.string.isRequired
};

export default MovieItem;