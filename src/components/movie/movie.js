import { Link, useNavigate } from "react-router-dom";
import { movieService } from "../../services/movieService";
import icon from './image-not-found.png'

import './movie.css';

const Movie = ({ movie: { title, poster_path, id, name, backdrop_path } }) => {
   const bg = movieService.w500Image(poster_path || backdrop_path);
   const navigate = useNavigate();

   return (
      <div className="movie-card" onClick={() => navigate(`${id}`)}>
         {<img src={bg} alt="poster" className="poster-img" />}
         <p className="poster-title">{title || name}</p>
      </div >
   );
};

export { Movie };