import { Link, useNavigate } from "react-router-dom";
import { movieService } from "../../services/movieService";
import './single-actor.css';

import undef from './no-user.jpg';

const SingleActor = ({ actor }) => {
   const { character, name, profile_path, id } = actor;
   const bg = movieService.w500Image(profile_path);
   const navigate = useNavigate();
   return (
      <Link to={`/actor/${id}`} className="actor-card">
         <img src={profile_path === null ? undef : bg} alt="photo" className='actor-img' />
         <div className="actor-card__name">
            <p><b>Character</b>: <br /> {character}</p>
            <p><b>Name</b>: <br /> {name}</p>
         </div>
      </Link>

   );
};

export { SingleActor };