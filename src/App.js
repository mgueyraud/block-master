import React, { lazy, useEffect, useState } from 'react';
import { Header, Hero } from '@partials';
import { Wrapper } from '@layout';
import { GlobalStyles } from '@styles';
import { MovieGrid } from "@containers";
import { MovieItem, Loader } from '@components';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '@actions/moviesActions';
import { openModal } from '@actions/modalActions';
import { Suspense } from 'react';

const Modal = lazy(() => import(/*webpackChunkName: "modal"*/ "./components/Modal"));

const App = () => {

    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const { API_KEY } = process.env;

    const dispatch = useDispatch();
    const moviesReducer = useSelector(state => state.moviesReducer);
    const modalReducer = useSelector(state => state.modalReducer);

    const fetchSearch = (query) => {
        setLoading(true);
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`)
            .then(res => res.json())
            .then(data => {
                dispatch(setMovies([...data.results]))
                setLoading(false);
            });
    };

    const fetchAll = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
            .then(res => res.json())
            .then(data => {
                dispatch(setMovies([...moviesReducer.movies, ...data.results]));
                setLoading(false);
            });
    }

    useEffect(() => {
        if (moviesReducer.search) return;
        setLoading(true);
        fetchAll();
    }, []);

    useEffect(() => {
        if (moviesReducer.search) {
            fetchSearch(moviesReducer.search);
            return;
        }

        dispatch(setMovies([]));
        fetchAll();
    }, [moviesReducer.search]);

    useEffect(() => {
        if (moviesReducer.search) {
            fetchSearch(moviesReducer.search);
            return;
        }

        fetchAll();
    }, [page])

    window.onscroll = function () {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            setPage(page + 1);
        }
    }

    const handleSelectedMovie = id => {
        dispatch(openModal(id));
    };

    return (
        <Wrapper>
            <GlobalStyles />
            <Header />
            <Hero popularMovies={[moviesReducer.movies[0], moviesReducer.movies[1], moviesReducer.movies[2]]} />
            <MovieGrid>
                {moviesReducer.movies.map(movie => (
                    <MovieItem
                        key={movie.id}
                        {...movie}
                        handleClick={handleSelectedMovie}
                    />
                ))}
            </MovieGrid>
            {loading && <Loader />}
            {modalReducer.isOpen && <Suspense fallback={null}>
                <Modal />
            </Suspense>}
        </Wrapper>
    );
}

export default App;