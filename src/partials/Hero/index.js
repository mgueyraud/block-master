import React, { useEffect, useState, useRef } from 'react';
import { Banner } from './styles';
import { HeroWrapper, Carousel, Paginate } from './styles';

const Hero = () => {
    const [slide, setSlide] = useState(0);
    const [times, setTimes] = useState(0);
    const [width, setWidth] = useState(0);
    const [trends, setTrends] = useState([]);
    const wrapperRef = useRef(null);
    const { API_KEY } = process.env;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                setTrends([data.results[0], data.results[1], data.results[2]])
            });
    }, [])

    useEffect(() => {
        const widthWrapper = wrapperRef.current.getBoundingClientRect().width;
        setWidth(widthWrapper);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {

            removeActiveItem();

            if (times < 2) {
                setTimes(times + 1);
                setSlide(slide + width + 24);
                setActiveItem(times + 1);
            } else {
                setTimes(0);
                setSlide(0);
                setActiveItem(0);
            }


        }, 3000);

        return () => clearInterval(interval);
    }, [slide, width, times]);

    const handleChangeSlide = (e) => {
        const indexSlide = e.target.dataset.index;
        const margin = (indexSlide - 1) !== 0 ? 24 * (indexSlide - 1) : 0;

        setTimes(indexSlide - 1);
        setSlide((indexSlide - 1) * width + margin);

        removeActiveItem();
        e.target.classList.add("active");
    };

    const setActiveItem = item => document.querySelectorAll("li")[item].classList.add("active");;

    const removeActiveItem = () => document.querySelector("li.active").classList.remove("active");

    return (
        <HeroWrapper ref={wrapperRef}>
            <Carousel style={{ transform: `translateX(-${slide}px)`, transition: "transform .8s", width: `${width * 3 + 24 * 2}px` }}>
                {trends.map(movie => (
                    <Banner key={movie.id} imgUrl={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} width={width} />
                ))}
            </Carousel>
            <Paginate>
                <li className="active" onClick={handleChangeSlide} data-index="1"></li>
                <li onClick={handleChangeSlide} data-index="2"></li>
                <li onClick={handleChangeSlide} data-index="3"></li>
            </Paginate>
        </HeroWrapper>
    );
}

export default Hero;