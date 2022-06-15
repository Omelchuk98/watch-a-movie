import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Movie } from "../movie/movie";
import { useSearchParams } from 'react-router-dom';

import { movieActions } from "../../redux/slices/movies-slice";

const TVShows = () => {
   const { tv } = useSelector(state => state.tv);
   const [query, setQuery] = useSearchParams({ page: '1' });
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(movieActions.getPopularTV({ page: query.get('page') }))
   }, [query]);

   const nextPage = () => {
      const nextPage = +query.get('page') + 1;
      setQuery({ page: `${nextPage}` })
   }
   return (
      <div className='movies'>
         <div className='movies__container'>
            <div className='movies-list'>
               {tv &&
                  tv.results.map((movie) => <Movie key={movie.id} movie={movie} />)}
            </div>
         </div>
         <div className='load-more' onClick={() => nextPage()}>
            <div className='load-more__button'>Load more</div>
         </div>
      </div>
   );
};

export { TVShows };