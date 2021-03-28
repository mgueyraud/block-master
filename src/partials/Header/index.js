import React from 'react';
import { Header, Anchor } from './styles';
import { Search } from '@components';

const HeaderComponent = () => {
    return (
        <Header>
            <img src="./assets/logo.png" />

            <Anchor href="">Todas</Anchor>
            <Anchor href="">Menos valoradas</Anchor>
            <Anchor active href="">Mas valoradas</Anchor>

            <Search />
        </Header>
    );
}

export default HeaderComponent;