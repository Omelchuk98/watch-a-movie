import { Link, useNavigate } from "react-router-dom";
import { movieService } from "../../services/movieService";

import './movie.css';
import undef from './image-not-found.png';

const Movie = ({ movie: { title, poster_path, id, name, backdrop_path } }) => {
   const bg = movieService.w500Image(poster_path || backdrop_path);
   const navigate = useNavigate();


   return (
      <div className="movie-card" onClick={() => navigate(`${id}`)}>
         {<img src={backdrop_path === null && poster_path === null ? undef : bg} alt="poster" className="poster-img" />}
         <p className="poster-title">{title || name}</p>
      </div >
   );
};

export { Movie };