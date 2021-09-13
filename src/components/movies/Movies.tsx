import './movies.css'
import MovieCard from './movieCard/MovieCard'

interface IProps {
    movies: Movie[]
    showMovieDetails: (page: number) => void;
}

const Movies = (props: IProps) => {

    return (
        <div className="movies">
            <div className="row">
                {props.movies.map((movie, index) => {
                    return (
                        <div className={movie.ShowMoreDetails ? 'column-md-12' : 'column-md-6'} key={`movie-${index}`}>
                            <MovieCard movie={movie} index={index} showMovieDetails={props.showMovieDetails} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Movies