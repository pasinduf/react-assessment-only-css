import { baseConfig } from './config';
import { getRequest } from './baseApiService';

const baseUrl = baseConfig(process.env.NODE_ENV).apiUrl;

export const searchMovies = (searchTerm: string, page: number) => {
    return getRequest(`${baseUrl}`, { s: searchTerm, page: page });
}

export const getMovieDetails = (movie: string) => {
    return getRequest(`${baseUrl}`, { t: movie });
}