import React from 'react';
import { Input, InputWrapper } from './styles';
import { Button } from '@components';

const Search = () => {
    return (
        <InputWrapper>
            <Input placeholder="Busca tu pelicula favorita" />
            <Button icon="./assets/img/icons/search-icon.svg" borderlessLeft />
        </InputWrapper>
    );
}

export default Search;