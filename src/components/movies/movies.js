import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { movieActions } from '../../redux/slices/movies-slice';
import { movieService } from '../../services/movieService';

import { Movie } from '../movie/movie';
import './movies.css';


const Movies = () => {
   const { movies } = useSelector(state => state.movies);
   const [query, setQuery] = useSearchParams({ page: '2' });
   const [films, setFilms] = useState([]);
   const dispatch = useDispatch();
   useEffect(() => {
      movieService.getPopularMovies().then(({ data }) => setFilms(data.results))
   }, [])

   useEffect(() => {
      dispatch(movieActions.getPopularMovies({ page: query.get('page') }))
   }, [query])

   const nextPage = async () => {
      const nextPage = +query.get('page') + 1;
      setFilms([...films, ...movies])
      setQuery({ page: `${nextPage}` })
   }
   return (
      <div className='movies'>
         <div className='movies__container'>
            <div className='movies-list'>
               {films &&
                  films.map((movie) => <Movie key={movie.id} movie={movie} />)}
            </div>
            <div className='load-more' onClick={() => nextPage()}>
               <div className='load-more__button'>Load more</div>
            </div>
         </div>
      </div >
   );
};

export { Movies };