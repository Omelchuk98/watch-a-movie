import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Movie } from "../movie/movie";
import { useSearchParams } from 'react-router-dom';
import { movieService } from "../../services/movieService";

import { movieActions } from "../../redux/slices/movies-slice";

const TVShows = () => {
   const { tv } = useSelector(state => state.tv);
   const [query, setQuery] = useSearchParams({ page: '2' });
   const [films, setFilms] = useState([]);
   const dispatch = useDispatch();
   useEffect(() => {
      movieService.getPopularTV().then(({ data }) => setFilms(data.results))
   }, [])
   useEffect(() => {
      dispatch(movieActions.getPopularTV({ page: query.get('page') }))
   }, [query]);

   const nextPage = () => {
      const nextPage = +query.get('page') + 1;
      setFilms([...films, ...tv])
      setQuery({ page: `${nextPage}` })
   }
   return (
      <div className='movies'>
         <div className='movies__container'>
            <div className='movies-list'>
               {films &&
                  films.map((movie) => <Movie key={movie.id} movie={movie} />)}
            </div>
         </div>
         <div className='load-more' onClick={() => nextPage()}>
            <div className='load-more__button'>Load more</div>
         </div>
      </div>
   );
};

export { TVShows };