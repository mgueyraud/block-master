import React, { useEffect, useRef } from 'react';
import { MovieArticle } from './styles';
import { Stars } from '@components';
import PropTypes from "prop-types";

const MovieItem = ({ poster_path, vote_average, original_title, handleClick }) => {

    const movieRef = useRef(null);

    useEffect(() => {

        if (!poster_path) return;

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

    return (
        <MovieArticle ref={movieRef} onClick={handleClick} hasImage={poster_path}>
            <Stars points={String(vote_average)} />
            {poster_path && <img className="lazy" data-src={`https://image.tmdb.org/t/p/w200/${poster_path}`} />}
            {!poster_path && <p>{original_title}</p>}
        </MovieArticle>
    );
}

MovieItem.propTypes = {
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    original_title: PropTypes.string.isRequired
};

export default MovieItem;