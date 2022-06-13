import { Link, useNavigate } from "react-router-dom";
import { movieService } from "../../services/movieService";

import './carousel-card.css';


const CarouselCard = (props) => {
   const item = props.item;
   const bg = movieService.w500Image(item.poster_path);
   const navigate = useNavigate();
   const link = props.category + '/' + item.id;
   console.log(link)
   return (
      <Link to={link} className='poster-link'>
         <div className="movie-card">
            <img src={bg} alt="poster" className="poster-img" />
            <p className="poster-title">{item.title}</p>
         </div >
      </Link>
   );
};

export { CarouselCard };