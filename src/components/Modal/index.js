import React, { useEffect, useState } from 'react';
import { CloseIcon, ModalContainer, ModalDescription, ModalWrapper, RotatedMovieItem } from './styles';
import { Button } from '@components';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from "@actions/modalActions";

const Modal = () => {

    const modalReducer = useSelector(state => state.modalReducer);
    const dispatch = useDispatch();
    const [movie, setMovie] = useState({});

    const { API_KEY } = process.env;


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${modalReducer.movieId}?api_key=${API_KEY}&language=es-ES`)
            .then(res => res.json())
            .then(data => {
                setMovie({
                    poster_path: data.poster_path,
                    original_title: data.original_title,
                    overview: data.overview,
                    genres: data.genres,
                    runtime: data.runtime,
                    release_date: data.release_date,
                    vote_average: data.vote_average
                });
            });
    }, []);

    const handleClose = () => {
        dispatch(closeModal());
    };

    return (
        <>
            { Object.keys(movie).length > 3 && <ModalWrapper>
                <ModalContainer>
                    <RotatedMovieItem {...movie} />
                    <ModalDescription>
                        <CloseIcon
                            src="./assets/img/icons/close-icon.svg"
                            onClick={handleClose}
                        />
                        <h1>{movie.original_title}</h1>
                        <p>{movie.overview}</p>
                        <p className="info">
                            <span>{movie.release_date}</span>
                            <span>{movie.genres?.[0].name}/{movie.genres?.[1].name}</span>
                            <span>{movie.runtime} min</span>
                        </p>
                        <div className="cta">
                            <Button text="Ver Ahora" icon="./assets/img/icons/play-icon.svg" />
                            <Button text="Ver Despues" icon="./assets/img/icons/plus-icon.svg" secondary />
                        </div>
                    </ModalDescription>
                </ModalContainer>
            </ModalWrapper>}
        </>
    );
}

export default Modal;