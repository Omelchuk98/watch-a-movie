import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { movieActions } from '../../redux/slices/movies-slice';

import { Movie } from '../movie/movie';
import './movies.css';


const Movies = () => {
   const { movies } = useSelector(state => state.movies);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(movieActions.getPopularMovies())
   }, [])

   return (
      <div className='movies'>
         <div className='movies__container'>
            <div className='movies-list'>
               {movies &&
                  movies.results.map((movie) => <Movie key={movie.id} movie={movie} />)}
            </div>
         </div>
      </div>
   );
};

export { Movies };