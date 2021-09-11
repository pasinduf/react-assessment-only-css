import './movieDetail.css';

interface IProps {
    movieDetails: MovieDetail
}

const MovieDetail = (props: IProps) => {

    return (
        <div>
            <div className="caption">Plot</div>
            <div>{props.movieDetails?.Plot}</div>
            <div className="caption">Actors</div>
            <div>{props.movieDetails?.Actors}</div>

            <div className="caption">Ratings</div>
            {props.movieDetails?.Ratings?.map((rating, index) => {
                return (
                    <div key={`rating-${index}`}>{`- ${rating.Source} : ${rating.Value}`}</div>
                )
            })}
        </div>
    )
}
export default MovieDetail