import './movieList.css';
import Card from '../card/card';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieList = () => {

    const [movieList, setMovieList] = useState([]);
    const { type } = useParams();

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        const random = Math.floor(Math.random() * 10);
        getData(random)
    }, [type])

    const getData = (random) => {
        fetch("https://api.tvmaze.com/shows")
            .then(res => res.json())
            .then(data => setMovieList(data.slice(random, random + 20)))
    }

    return (
        <div className='movie__list'>
            <h2 className='list__title'>{(type ? type : "TRENDING").toUpperCase()}</h2>
            <div className='list__cards'>
                {
                    movieList.map(movie => (
                        <Card movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList;