import React, { useState } from 'react';
import { Input, InputWrapper } from './styles';
import { Button } from '@components';
import { useDispatch } from 'react-redux';
import { searchMovie } from '@actions/moviesActions';

const Search = () => {

    const [movieName, setMovieName] = useState("");
    const dispatch = useDispatch();

    const handleSearch = e => dispatch(searchMovie(movieName));

    return (
        <InputWrapper>
            <Input placeholder="Busca tu pelicula favorita" onChange={e => setMovieName(e.target.value)} />
            <Button icon="./assets/img/icons/search-icon.svg" borderlessLeft onClick={handleSearch} />
        </InputWrapper>
    );
}

export default Search;