import React, { useEffect, useState } from 'react';
import Header from 'components/shared/header/Header'
import Movies from 'components/movies/Movies';
import './layout.css';
import { searchMovies } from 'services/movieApiService';
import Pagination from 'components/shared/pagination/Pagination'

const Layout = () => {

    const [showLandingBanner, setShowLandingBanner] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState<Movie[]>([]);
    const [totalCount, setTotalCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState('');
    const moviesPageSize = 10


    useEffect(() => {
        if (searchTerm.length === 0) {
            setMovies([])
            setCurrentPage(1)
            setTotalCount(0)
            setShowLandingBanner(true)
        }
    }, [searchTerm])

    useEffect(() => {
        if (searchTerm.length > 0) fetchMovies();
    }, [currentPage])

    const onSearch = () => {
        if (searchTerm.length > 0) fetchMovies();
        if (currentPage > 1) setCurrentPage(1);
    }

    const fetchMovies = () => {
        setIsLoading(true);
        setMovies([])
        setShowLandingBanner(false)
        searchMovies(searchTerm, currentPage).then(res => {
            if (res.Response === 'True') {
                setMovies(res.Search);
                setTotalCount(parseInt(res.totalResults))
                setError('');
            } else {
                setMovies([]);
                setError(res.Error);
            }
            setIsLoading(false);
        })
    }

    const showMovieDetails = (index: number) => {
        const currentMovies = [...movies];
        currentMovies[index].ShowMoreDetails = true;
        setMovies(currentMovies)
    }

    return (
        <div>
            <Header
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                onSearch={onSearch}
            />
            {showLandingBanner &&
                <div className="landing-banner">
                    Welcome to OMDB Search, search something in the bar above!
                </div>
            }

            {!isLoading && !showLandingBanner && !(movies.length > 0) &&
                <div className="error-banner">
                    {error}
                </div>
            }

            {movies.length > 0 &&
                <>
                    <div className="pagination">
                        <Pagination
                            title="movies"
                            totalCount={totalCount}
                            currentPage={currentPage}
                            totalPages={((Math.floor(totalCount / moviesPageSize)) + (totalCount % moviesPageSize > 0 ? 1 : 0))}
                            pageSize={moviesPageSize}
                            onPageChange={(page: number) => setCurrentPage(page)}
                        />
                    </div>

                    <Movies
                        movies={movies}
                        showMovieDetails={showMovieDetails}
                    />
                </>
            }
        </div>
    )
}

export default Layout;