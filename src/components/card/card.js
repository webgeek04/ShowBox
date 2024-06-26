import { useState, useEffect } from 'react';
import './card.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';

const Card = ({ movie }) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])
    return (
        <>
            {
                isLoading ?
                    <div className='cards'>
                        <SkeletonTheme color="#202020" highlightColor="#444">
                            <Skeleton height={300} duration={2} />
                        </SkeletonTheme>
                    </div>
                    :
                    <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`}>
                        <div className='cards'>
                            <img src={movie.image.medium} className="cards__img" />
                            <div className='cards__overlay'>
                            <div className="card__title">{movie ? movie.name : ""}</div>
                            <div className="card__runtime">{movie ? movie.premiered : ""}
                            <span className="card__rating">{movie ? movie.rating.average : ""}
                                <i className='fas fa-star' />
                            </span>
                            </div>
                            <div className="card__description">{movie ? movie.summary.slice(0, 118) + "..." : ""}</div>
                        </div>
                        </div>
                    </Link>



            }
        </>
    )
}

export default Card;