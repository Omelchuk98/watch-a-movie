import { Link, useNavigate } from "react-router-dom";
import { movieService } from "../../services/movieService";

import './movie.css';

const Movie = ({ movie: { title, poster_path, id } }) => {
   const bg = movieService.w500Image(poster_path);
   const navigate = useNavigate();
   return (
      <div className="movie-card" onClick={() => navigate(`${id}`)}>
         <img src={bg} alt="poster" className="poster-img" />
         <p className="poster-title">{title}</p>
      </div >
   );
};

export { Movie };