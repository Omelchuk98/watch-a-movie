import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Movie } from "../movie/movie";
import { useSearchParams } from 'react-router-dom';
import { movieService } from "../../services/movieService";
import { axiosService } from "../../services/axios-service";

import { movieActions } from "../../redux/slices/movies-slice";
import { Spinner } from "../spinner/spinner";

const TVShows = () => {
   const { tv } = useSelector(state => state.tv);
   const [query, setQuery] = useSearchParams({ page: '2' });
   const [films, setFilms] = useState([]);

   const [value, setValue] = useState('');
   const [loading, setLoading] = useState(false);

   const dispatch = useDispatch();
   useEffect(() => {
      movieService.getPopularTV().then(({ data }) => setFilms(data.results));
      setLoading(true);
   }, [])
   useEffect(() => {
      dispatch(movieActions.getPopularTV({ page: query.get('page') }))
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

   const nextPage = () => {
      const nextPage = +query.get('page') + 1;
      setFilms([...films, ...tv])
      setQuery({ page: `${nextPage}` })
   }
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
         </div>
         <div className='load-more' onClick={() => nextPage()}>
            <div className='load-more__button'>Load more</div>
         </div>
      </div>
   );
};

export { TVShows };