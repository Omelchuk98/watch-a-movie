import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieDetails } from "../../components/movie-details/movie-details";
import { movieService } from "../../services/movieService";
import './single-movie-page.css'

const SingleMoviePage = () => {
   const [details, setDetails] = useState(null);
   const { id } = useParams();
   useEffect(() => {
      movieService.getMovieById(id).then(({ data }) => setDetails(data))
   }, [id])
   return (
      <div>
         {details && <MovieDetails details={details} />}
      </div>
   );
};

export { SingleMoviePage };