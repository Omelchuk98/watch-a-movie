import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { movieActions } from '../../redux/slices/movies-slice';
import { movieService } from '../../services/movieService';
import { axiosService } from "../../services/axios-service";
import { Spinner } from '../index';

import { Movie } from '../movie/movie';
import './movies.css';


const Movies = () => {
   const { movies } = useSelector(state => state.movies);
   const [query, setQuery] = useSearchParams({ page: '2' });
   const [films, setFilms] = useState([]);
   const dispatch = useDispatch();

   const [value, setValue] = useState('');
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      movieService.getPopularMovies().then(({ data }) => setFilms(data.results));
      setLoading(true);
   }, []);

   useEffect(() => {
      dispatch(movieActions.getPopularMovies({ page: query.get('page') }))
   }, [query]);

   useEffect(() => {
      if (value) {
         fetchSearch();
      }
   }, [value]);

   const fetchSearch = async () => {
      const { data } = await axiosService.get(
         `/search/movie?api_key=5c2525c3ff30c51f248cb4c0f55c72ae&language=en-US&query=${value}`);
      setFilms(data.results);
   };

   const nextPage = async () => {
      const nextPage = +query.get('page') + 1;
      setFilms([...films, ...movies])
      setQuery({ page: `${nextPage}` })
   };
   return (
      <div className='movies'>
         <div className='form_container'>
            <div className="form">
               <input
                  type='text'
                  placeholder=' '
                  className='textbox'
                  autoComplete='off'
                  onChange={(event) => setValue(event.target.value)} />
               <label className='form-label'><b>Search</b></label>
               {/* <button onClick={() => fetchSearch()}>Search</button> */}
            </div>
         </div>
         <div className='movies__container'>
            <div className='movies-list'>
               {loading ?
                  films.map((movie) => <Movie key={movie.id} movie={movie} />) : <Spinner />}
            </div>
            <div className='load-more' onClick={() => nextPage()}>
               <div className='load-more__button'>Load more</div>
            </div>
         </div>
      </div >
   );
};

export { Movies };