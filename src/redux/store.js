import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { movieReducer } from './slices/movies-slice';

const rootReducer = combineReducers({
   movies: movieReducer,

});

const store = configureStore({
   reducer: rootReducer
})

export {
   store
}