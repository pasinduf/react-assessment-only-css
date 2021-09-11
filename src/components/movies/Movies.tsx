import './movies.css'
import MovieCard from './movieCard/MovieCard'
import Pagination from 'components/shared/pagination/Pagination'

interface IProps {
    movies: Movie[]
    totalCount: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    showMovieDetails: (page: number) => void;
}

const Movies = (props: IProps) => {
    const pageSize = 10

    return (
        <div className="movies">

            {props.movies.length > 0 &&
                <div className="pagination">
                    <Pagination
                        title="Movies"
                        totalCount={props.totalCount}
                        currentPage={props.currentPage}
                        totalPages={((Math.floor(props.totalCount / pageSize)) + (props.totalCount % pageSize > 0 ? 1 : 0))}
                        pageSize={pageSize}
                        onPageChange={props.onPageChange}
                    />
                </div>
            }
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