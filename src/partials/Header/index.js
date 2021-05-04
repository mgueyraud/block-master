import React from 'react';
import { Header, Anchor } from './styles';
import { Search } from '@components';
import { useDispatch } from 'react-redux';
import { searchMovie } from '@actions/moviesActions';

const HeaderComponent = () => {

    const dispatch = useDispatch();

    const handleClickAll = e => {
        e.preventDefault();
        dispatch(searchMovie(""))
    }

    return (
        <Header>
            <img src="./assets/img/placeholders/logo.png" />

            <Anchor href="" onClick={handleClickAll}>Todas</Anchor>
            <Anchor href="">Menos valoradas</Anchor>
            <Anchor active href="">Mas valoradas</Anchor>

            <Search />
        </Header>
    );
}

export default HeaderComponent;