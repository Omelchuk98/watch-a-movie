import { axiosService } from "./axios-service";
import { category, status } from "../constants/urls";

const api_key = '?api_key=5c2525c3ff30c51f248cb4c0f55c72ae';

const movieService = {
   getMovieById: (id) => axiosService.get(`${category.movie}/${id}${api_key}`),
   getTVById: (id) => axiosService.get(`${category.tv}/${id}${api_key}`),
   getComingMovies: () => axiosService.get(`${category.movie}${status.upcoming}${api_key}`),
   getPopularMovies: () => axiosService.get(`${category.movie}${status.popular}${api_key}`),
   getTopMovies: () => axiosService.get(`${category.movie}${status.top_rated}${api_key}`),
   getComingTV: () => axiosService.get(`${category.tv}${status.on_the_air}${api_key}`),
   getPopularTV: () => axiosService.get(`${category.tv}${status.popular}${api_key}`),
   getTopTV: () => axiosService.get(`${category.tv}${status.top_rated}${api_key}`),
   originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
   w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
   getVideo: (id) => axiosService.get(`${category.movie}/${id}/videos${api_key}`),

}

export {
   movieService
}