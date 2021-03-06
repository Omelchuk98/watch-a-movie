import { Link, useNavigate } from "react-router-dom";
import { movieService } from "../../services/movieService";

import './carousel-card.css';
import undef from './image-not-found.png';

const CarouselCard = (props) => {
   const item = props.item;
   const bg = movieService.w500Image(item.poster_path || item.backdrop_path);
   const navigate = useNavigate();
   const link = props.category + '/' + item.id;
   return (
      <Link to={link} className='poster-link'>
         <div className="movie-card carousel-card">
            <img src={item.poster_path === null && item.backdrop_path === null ? undef : bg} alt="poster" className="poster-img" />
            <p className="poster-title">{item.title || item.name}</p>
         </div >
      </Link>
   );
};

export { CarouselCard };