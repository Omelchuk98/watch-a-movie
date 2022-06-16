import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { movieService } from '../../services/movieService';

let initialState = {
   movies: [],
   tv: [],
};

const getPopularMovies = createAsyncThunk(
   'movieSlice/getPopularMovies',
   async ({ page }) => {
      const { data } = await movieService.getPopularMovies(page);
      return data.results;
   }
)

const getPopularTV = createAsyncThunk(
   'movieSlice/getPopularTV',
   async ({ page }) => {
      const { data } = await movieService.getPopularTV(page);
      return data.results;
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

      [getPopularTV.fulfilled]: (state, action) => {
         state.tv = action.payload;
      },
   }
})

const { reducer: movieReducer, actions: { } } = movieSlice;

const movieActions = {
   getPopularMovies,
   getPopularTV,
};

export {
   movieReducer,
   movieActions,
}