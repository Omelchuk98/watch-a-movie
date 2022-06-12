import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { movieService } from '../../services/movieService';

let initialState = {
   movies: null,
   details: null,
};

const getPopularMovies = createAsyncThunk(
   'movieSlice/getPopularMovies',
   async () => {
      const { data } = await movieService.getPopularMovies();
      return data;
   }
)
const getMovieById = createAsyncThunk(
   'movieSlice/getMovieById',
   async () => {
      const { data } = await movieService.getMovieById();
      return data;
   }
)

const movieSlice = createSlice({
   name: 'movieSlice',
   initialState,
   reducers: {
   },
   extraReducers: {

      [getPopularMovies.fulfilled]: (state, action) => {
         state.movies = action.payload;
      },


      [getMovieById.fulfilled]: (state, action) => {
         state.details = action.payload;
      },

   }
})

const { reducer: movieReducer, actions: { } } = movieSlice;

const movieActions = {
   getPopularMovies,
   getMovieById,
};

export {
   movieReducer,
   movieActions,
}