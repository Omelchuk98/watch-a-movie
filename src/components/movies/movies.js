import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { movieActions } from '../../redux/slices/movies-slice';

import { Movie } from '../movie/movie';
import './movies.css';


const Movies = () => {
   const { movies } = useSelector(state => state.movies);
   const [query, setQuery] = useSearchParams({ page: '1' });
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(movieActions.getPopularMovies({ page: query.get('page') }))
   }, [query])

   const nextPage = () => {
      const nextPage = +query.get('page') + 1;
      setQuery({ page: `${nextPage}` })
   }
   return (
      <div className='movies'>
         <div className='movies__container'>
            <div className='movies-list'>
               {movies &&
                  movies.results.map((movie) => <Movie key={movie.id} movie={movie} />)}
            </div>
            <div className='load-more' onClick={() => nextPage()}>
               <div className='load-more__button'>Load more</div>
            </div>
         </div>
      </div >
   );
};

export { Movies };