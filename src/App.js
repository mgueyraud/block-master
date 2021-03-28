import React, { useEffect, useState } from 'react';
import { Header, Hero } from '@partials';
import { Wrapper } from '@layout';
import { GlobalStyles } from './styles';
import { MovieGrid } from "@containers";
import { MovieItem, Loader } from './components';

const App = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const { API_KEY } = process.env;

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
            .then(res => res.json())
            .then(data => {
                setMovies([...movies, ...data.results])
                setLoading(false);
            });
    }, [page]);

    window.onscroll = function () {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            setPage(page + 1);
        }
    }

    return (
        <Wrapper>
            <GlobalStyles />
            <Header />
            <Hero />
            <MovieGrid>
                {movies.map(movie => (
                    <MovieItem
                        key={movie.id}
                        points={String(movie.vote_average)}
                        imgUrl={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    />
                ))}
            </MovieGrid>
            {loading && <Loader />}
        </Wrapper>
    );
}

export default App;