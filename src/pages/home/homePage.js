import './homePage.css';
import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import MovieList from '../../components/movieList/movieList';

const Home = () => {

    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        fetch("https://api.tvmaze.com/shows")
            .then(res => res.json())
            .then(data => setPopularMovies(data.slice(0, 20)))
    }, [])

    return (
        <>
            <div className='poster'>
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}>
                    {
                        popularMovies.map(movie => (
                            <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} >
                                <div className='posterImage'>
                                    <img src={movie.image.original} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.name : ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.premiered : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.rating.average : ""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.summary : ""}</div>
                                </div>
                            </Link>
                        ))


                    }
                </Carousel >
                <MovieList />
            </div >
        </>
    )
}
export default Home;