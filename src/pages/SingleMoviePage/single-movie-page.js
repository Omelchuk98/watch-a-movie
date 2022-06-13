import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { MovieDetails } from "../../components/movie-details/movie-details";
import { movieService } from "../../services/movieService";

import './single-movie-page.css'

const SingleMoviePage = () => {
   const { state } = useLocation;
   const [details, setDetails] = useState(state);
   const { id } = useParams();
   useEffect(() => {
      if (!state) {
         movieService.getMovieById(id).then(({ data }) => setDetails(data))
      } else {
         setDetails(state)
      }
   }, [id, state])

   return (
      <div>
         {details && <MovieDetails details={details} />}
      </div>
   );
};

export { SingleMoviePage };