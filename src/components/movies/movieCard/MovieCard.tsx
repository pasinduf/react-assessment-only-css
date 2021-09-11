import React, { useEffect, useState } from 'react'
import './movieCard.css'
import MovieDetail from './MovieDetail'
import { getMovieDetails } from 'services/movieApiService';

interface IProps {
    movie: Movie,
    index: number;
    showMovieDetails: (index: number) => void;
}

const MovieCard = (props: IProps) => {

    const [showDetails, setShowDetails] = useState(false);
    const [movieDetails, setMovieDetails] = useState<MovieDetail>({} as MovieDetail);

    const showMovieDetails = () => {
        props.showMovieDetails(props.index);
        setShowDetails(!showDetails)
    }

    useEffect(() => {
        if (showDetails) {
            getMovieDetails(props.movie.Title).then(res => {
                setMovieDetails(res);
            })
        }
    }, [showDetails])

    return (
        <div className="card">
            <div className="row">
                <div className="col image">
                    <img src={props.movie.Poster} alt="poster" className="poster" />
                </div>
                <div className="col details">
                    <div className="title">{props.movie.Title}</div>

                    <div className="more-details">
                        {showDetails && movieDetails &&
                            <MovieDetail movieDetails={movieDetails} />
                        }
                    </div>

                    <div className="border"></div>
                    <div className="bottom-details">
                        <div className="col year">{props.movie.Year}</div>
                        {!showDetails &&
                            <div className="action">
                                <button onClick={() => showMovieDetails()} className="expand-button">DETAILS</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MovieCard