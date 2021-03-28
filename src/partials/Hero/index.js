import React from 'react';
import { Banner } from '@components';
import { HeroWrapper, Carousel, Paginate } from './styles';

const Hero = () => {
    return (
        <HeroWrapper>
            <Carousel>
                <Banner imgUrl="./assets/img/placeholders/mulan.png" alt="Mulan Portada" />
                <Banner imgUrl="./assets/img/placeholders/raya.png" alt="raya Portada" />
                <Banner imgUrl="./assets/img/placeholders/unidos.png" alt="unidos Portada" />
            </Carousel>
            <Paginate>
                <li className="active"></li>
                <li></li>
                <li></li>
            </Paginate>
        </HeroWrapper>
    );
}

export default Hero;